package com.example.springboot.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ClienteRecordDto(


        @NotBlank @NotNull String nome,
        String endereco,
        @NotBlank @NotNull String telefone,
        @NotBlank @NotNull String cpf,
        String email


) {}
