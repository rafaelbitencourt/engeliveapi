DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS plantas_detalhes;
DROP TABLE IF EXISTS plantas;
DROP TABLE IF EXISTS detalhes;
DROP TABLE IF EXISTS projetos;
DROP TABLE IF EXISTS obras;
DROP TABLE IF EXISTS tipos_projetos;
DROP TABLE IF EXISTS tenants;

CREATE TABLE tenants (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE
);

CREATE TABLE tipos_projetos (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  idtenant int NOT NULL,
  nome varchar(100) NOT NULL,
  CONSTRAINT fk_tp_tenant FOREIGN KEY (idtenant) REFERENCES tenants (id)
);

CREATE TABLE obras (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  idtenant int NOT NULL,
  nome varchar(100) NOT NULL,
  previsao date NOT NULL,
  CONSTRAINT fk_obras_tenant FOREIGN KEY (idtenant) REFERENCES tenants (id)
);

CREATE TABLE projetos (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  idtenant int NOT NULL,
  idobra int NOT NULL,
  idtipoprojeto int NOT NULL,
  CONSTRAINT fk_projetos_obras FOREIGN KEY (idobra) REFERENCES obras (id) ON DELETE CASCADE,
  CONSTRAINT fk_projetos_tipo_projeto FOREIGN KEY (idtipoprojeto) REFERENCES tipos_projetos (id),
  CONSTRAINT fk_projetos_tenant FOREIGN KEY (idtenant) REFERENCES tenants (id)
);

CREATE TABLE detalhes (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  idtenant int NOT NULL,
  idprojeto int NOT NULL,
  nome varchar(200) NOT NULL,
  imagem BYTEA,
  CONSTRAINT fk_detalhe_projeto FOREIGN KEY (idprojeto) REFERENCES projetos (id) ON DELETE CASCADE,
  CONSTRAINT fk_detalhe_tenant FOREIGN KEY (idtenant) REFERENCES tenants (id)
);

CREATE TABLE plantas (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  idtenant int NOT NULL,
  idprojeto int NOT NULL,
  descricao varchar(500) NOT NULL,
  imagem BYTEA,
  CONSTRAINT fk_planta_projeto FOREIGN KEY (idprojeto) REFERENCES projetos (id) ON DELETE CASCADE,
  CONSTRAINT fk_planta_tenant FOREIGN KEY (idtenant) REFERENCES tenants (id)
);

CREATE TABLE plantas_detalhes (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  idtenant int NOT NULL,
  idplanta int NOT NULL,
  iddetalhe int NOT NULL,
  coordenadaX int NOT NULL,
  coordenadaY int NOT NULL,
  CONSTRAINT fk_pd_detalhe FOREIGN KEY (iddetalhe) REFERENCES detalhes (id),
  CONSTRAINT fk_pd_planta FOREIGN KEY (idplanta) REFERENCES plantas (id) ON DELETE CASCADE,
  CONSTRAINT fk_pd_tenant FOREIGN KEY (idtenant) REFERENCES tenants (id)
);

CREATE TABLE usuarios (
  id SERIAL NOT NULL PRIMARY KEY UNIQUE,
  idtenant int NOT NULL,
  usuario varchar(45) NOT NULL,
  email varchar(300) NOT NULL,
  senha varchar(500) NOT NULL,
  CONSTRAINT fk_usuario_tenant FOREIGN KEY (idtenant) REFERENCES tenants (id)
);
