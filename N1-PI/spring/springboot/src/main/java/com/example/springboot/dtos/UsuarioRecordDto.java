package com.example.springboot.dtos;

import jakarta.validation.constraints.NotBlank;

public record UsuarioRecordDto(
        @NotBlank String nome,
        @NotBlank String senha,
        @NotBlank String endereco,
        @NotBlank String telefone,
        @NotBlank String cpf,
        @NotBlank String email,
        Boolean admin
) {}
