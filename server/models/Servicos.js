const keystone = require('keystone');

const { Types } = keystone.Field;

const Servicos = new keystone.List('Servicos',
{map: {name: "titulo"}, label:"Serviços"}); 

Servicos.add({

  image: {
    type: Types.CloudinaryImages,
    require: true,
    label: "Imagem do serviço"
  },

  titulo: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label: "Título do serviço",
    note: "Dê um título ao seu serviço"
  },

  subtitulo:{
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
    label: "Subtítulo do serviço",
    note: "Dê um subtítulo ao seu serviço"
  },

  descricao: {
    type: Types.Textarea,
    required: true,
    initial: true,
    index: true,
    label: "Descrição do serviço",
    note: "Conte-nos um pouco sobre o serviço"
  },

});

Servicos.register();