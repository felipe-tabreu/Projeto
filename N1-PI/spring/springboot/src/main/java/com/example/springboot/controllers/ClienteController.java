package com.example.springboot.controllers;

import com.example.springboot.dtos.ClienteRecordDto;
import com.example.springboot.dtos.UsuarioRecordDto;
import com.example.springboot.models.ClienteModel;
import com.example.springboot.models.UsuarioModel;
import com.example.springboot.repositories.ClienteReposity;
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
@RequestMapping("/clientes")


public class ClienteController {


    @Autowired
    ClienteReposity clienteReposity;


    @PostMapping
    public ResponseEntity<ClienteModel> saveCliente(@RequestBody @Valid ClienteRecordDto clienteRecordDto){
        var clienteModel = new ClienteModel();
        BeanUtils.copyProperties(clienteRecordDto, clienteModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteReposity.save(clienteModel));
    }


    @GetMapping
    public ResponseEntity <List<ClienteModel>> buscarClientes(){
        return ResponseEntity.status(HttpStatus.OK).body(clienteReposity.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> buscarCliente(@PathVariable(value = "id") Integer id){
        Optional<ClienteModel> clienteO = clienteReposity.findById(id);
        if(clienteO.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não existe");
        }
        return ResponseEntity.status(HttpStatus.OK).body(clienteO.get());
    }




    @PutMapping("/{id}")
    public ResponseEntity<Object> atualizarCliente(@PathVariable(value = "id")Integer id,
                                                   @Valid @RequestBody ClienteRecordDto clienteRecordDto){
        Optional<ClienteModel> cliente0 = clienteReposity.findById(id);
        if(cliente0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente Não existe");
        }

        var clienteModel = cliente0.get();
        BeanUtils.copyProperties(clienteRecordDto, clienteModel);
        return ResponseEntity.status(HttpStatus.OK).body(clienteReposity.save(clienteModel));
    }



    @PatchMapping("/{id}")
    public ResponseEntity<Object> atualizarParcialCliente(@PathVariable(value = "id") Integer id,
                                                   @RequestBody ClienteRecordDto clienteRecordDto) {
        Optional<ClienteModel> clienteOptional = clienteReposity.findById(id);
        if (clienteOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cliente não encontrado");
        }

        ClienteModel clienteModel = clienteOptional.get();

        if (clienteRecordDto.nome() != null) {
            clienteModel.setNome(clienteRecordDto.nome());
        }
        if (clienteRecordDto.endereco() != null) {
            clienteModel.setEndereco(clienteRecordDto.endereco());
        }
        if (clienteRecordDto.telefone() != null) {
            clienteModel.setTelefone(clienteRecordDto.telefone());
        }
        if (clienteRecordDto.cpf() != null) {
            clienteModel.setCpf(clienteRecordDto.cpf());
        }
        if (clienteRecordDto.email() != null) {
            clienteModel.setEmail(clienteRecordDto.email());
        }

        // Salve o objeto atualizado no repositório
        clienteReposity.save(clienteModel);

        // Retorne a resposta OK com o cliente atualizado
        return ResponseEntity.status(HttpStatus.OK).body(clienteModel);
    }






    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarCliente(@PathVariable(value = "id")Integer id){
        Optional<ClienteModel> cliente0 = clienteReposity.findById(id);
        if(cliente0.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pessoa Não existe");
        }

        var clienteModel = cliente0.get();
        clienteReposity.delete(cliente0.get());
        return ResponseEntity.status(HttpStatus.OK).body("Cliente deletado com Sucesso");
    }

}




