const keystone = require('keystone');

const { Types } = keystone.Field;

const Servicos = new keystone.List('Servicos',
{map: {nome: "titulo"}, label:"Serviços"}); 

Servicos.add({

  image: {
    type: Types.CloudinaryImages,
    require: true,
    lobel: "Imagem",
    note: "Coloque aqui uma imagem do seu serviço"
  },

  titulo: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label: "Título do serviço",
    note: "Dê um título ao seu serviço"
  },

  descricao: {
    type: Types.Textarea,
    required: true,
    initial: true,
    index: true,
    label: "Descrição do serviço",
    note: "Conte-nos um pouco sobre o serviço",
  }

});

Servicos.register();