package com.example.springboot.controllers;


import com.example.springboot.dtos.UsuarioRecordDto;
import com.example.springboot.models.UsuarioModel;
import com.example.springboot.repositories.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Define as políticas de CORS para todo o controlador
@RequestMapping("/pessoas")
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping
    public ResponseEntity<UsuarioModel> savePessoa(@RequestBody @Valid UsuarioRecordDto usuarioRecordDto){
        var pessoaModel = new UsuarioModel();
        BeanUtils.copyProperties(usuarioRecordDto, pessoaModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(pessoaModel));
    }

    @GetMapping
    public ResponseEntity <List<UsuarioModel>> buscarPessoas(){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> buscarPessoa(@PathVariable(value = "id")UUID id){
        Optional<UsuarioModel> pessoaO = usuarioRepository.findById(id);
        if(pessoaO.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa não existe");
        }
        return ResponseEntity.status(HttpStatus.OK).body(pessoaO.get());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> atualizarPessoa(@PathVariable(value = "id")UUID id,
                                                  @Valid @RequestBody UsuarioRecordDto usuarioRecordDto){
        Optional<UsuarioModel> pessoa0 = usuarioRepository.findById(id);
        if(pessoa0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa Não existe");
        }

        var pessoaModel = pessoa0.get();
        BeanUtils.copyProperties(usuarioRecordDto, pessoaModel);
        return ResponseEntity.status(HttpStatus.OK).body(usuarioRepository.save(pessoaModel));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarPessoa(@PathVariable(value = "id")UUID id){
        Optional<UsuarioModel> pessoa0 = usuarioRepository.findById(id);
        if(pessoa0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa Não existe");
        }

        var pessoaModel = pessoa0.get();
        usuarioRepository.delete(pessoa0.get());
        return ResponseEntity.status(HttpStatus.OK).body("Pessoa deletada com Sucesso");
    }
}


