# Sistema de Gestão de Manutenção (SGM) - Formativa

## Briefing
O projeto consiste no desenvolvimento de um Sistema de Gestão de Manutenção (SGM) no formato de uma aplicação web. O objetivo é centralizar e otimizar o controle das atividades de manutenção de máquinas e equipamentos de uma empresa. A plataforma permitirá o cadastro de equipamentos, agendamento de manutenções preventivas e corretivas, e o gerenciamento de ordens de serviço.

## Objetivo do Projeto
- gerenciar informações sobre equipamentos e manutenção realizadas pela empresa
- realizar abertura de chamados de manutenção (ordens de serviço)
- dashboard de históricos de manutenção
- proteger acesso aos dados do sistema (criptografia e autenticação segura de usuários)

## Público-Alvo
- Tecnicos de Manutenção (usuários finais)
- Gestores de Manutenção (usuáriso intermediários)
- Administradores do Sistema (Gerenciar a permissão dos usuários)

## Levantamento de Requistos do Projeto

- ### Requistos Funcionais

- ### Requisitos Não Funcionais

## Recursos do Projeto
- ### Tecnológicos
    - Framework de Desenvolvimento Next/React
    - Linguagem de Programação: TypeScript
    - Banco de Dados: Não Relacional (MongoDB)
    - GitHub
    - VsCode
    - Figma

- ### Pessoal
    - Dev Tudo

## Análise de Risco

## Diagramas

1. ### Classe
Descrever o Comportamento das Entidades de um Projeto  
    - Usuário (User/Usuario)
        - Atributos: id, nome, email, senha, função
        - Métodos: create, read , update, delete, login, logout

    - Equipamento (Equipment/Equipamento)
        - Atributos: id, marca, modelo, localização, status, numeroSerie
        - Métodos: CRUD

    - Ordens de Serviço (OrdemServico)
        - Atributos: id, titulo, descricao, tipoManutenção, status, idTecnico, idEquipamento

```mermaid
   
classDiagram

    class Usuario{
        +String id
        +String nome
        +String email
        +String senha
        +String funcao
        +login()
        +logout()
        +CRUD()
    }   

    class Equipamento{
        +String id
        +String modelo
        +String marca
        +String localizacao
        +boolean status
        +string numSerie
        +CRUD()
    }

    class OrdemServico{
        +String id
        +String titulo
        +String descricao
        +String tipoManutencao
        +Enum status
        +String idTecnico
        +String idEquipamento
        +CRUD()
    }

    Usuario "1"--"1+" OrdemServico : "é responsável por"
    Equipamento "1"--"1+" OrdemServico: "associada a"
 
```