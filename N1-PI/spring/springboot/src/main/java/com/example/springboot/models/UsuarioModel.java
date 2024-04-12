package com.example.springboot.models;


import jakarta.persistence.*;

import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name="USUARIO")
public class UsuarioModel implements Serializable {
    private static final long serialVersionUID =1l;


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idPessoa;
    private String nome;
    private String senha;

    private String endereco;

    private String telefone;

    private String cpf;

    private String email;

    private Boolean admin;

    public UUID getIdPessoa() {
        return idPessoa;
    }

    public void setIdPessoa(UUID idPessoa) {
        this.idPessoa = idPessoa;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
