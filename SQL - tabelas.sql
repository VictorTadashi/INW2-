create database Floricultura;
use Floricultura;

create table Clientes (
Cpf varchar(11) PRIMARY KEY, 
Nome varchar(50), 
Idade int, 
Sexo char(1),
Endereco varchar(50), 
Telefone varchar(20)
); 

create table Produtos (
Codigo int PRIMARY KEY, 
Nome varchar(50), 
Preco float(7,2),
Validade date 
); 
	 insert into Clientes (Cpf, Nome, Idade, Sexo, Endereco, Telefone)
     values ('50432933816', 'Victor Tadashi', 17, 'M', 'Rua Senna Madureira 80', '11 94264-6101');   
     insert into Clientes (
     Cpf, Nome, Idade, Sexo, Endereco, Telefone)
     values ('47257087555', 'José', '25', 'M', 'Rua Jesus Amem 90', '11 1234-5678');   
     insert into Clientes (
     Cpf, Nome, Idade, Sexo, Endereco, Telefone)
     values ('72687367036', 'Maria Eduarda', '15', 'F', 'Rua Xavier da Veiga 90', '11 8765-4321');   
     insert into Clientes (
     Cpf, Nome, Idade, Sexo, Endereco, Telefone)
     values ('56615877759', 'Eduardo', '90', 'M', 'Rua Satanas 666', '11 0009-1234');   
     insert into Clientes (
     Cpf, Nome, Idade, Sexo, Endereco, Telefone)
     values ('44263338499', 'Julia', '50', 'F', 'Rua Lins de Vasconcelos 94', '11 1090-8070');   
     
     insert into Produtos (Codigo, Nome, Preco, Validade)
     values (1, 'Rosa', 100.50, '2024-12-30');
     insert into Produtos (Codigo, Nome, Preco, Validade)
     values (2, 'Tulipa', 200.50, '2024-10-25');
     insert into Produtos (Codigo, Nome, Preco, Validade)
     values (3, 'Girassol', 50.50, '2024-12-30');
     insert into Produtos (Codigo, Nome, Preco, Validade)
     values (4, 'Margarida', 94.50, '2024-12-30');
     insert into Produtos (Codigo, Nome, Preco, Validade)
     values (5, 'Samanbaia', 20.50, '2024-12-30');
     
     