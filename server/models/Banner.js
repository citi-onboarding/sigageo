const keystone = require('keystone');

const { Types } = keystone.Field;

const Banner = new keystone.List('Banner',
{map: {name: "key"}, nocreate: true, nodelete: true }); 

Banner.add({

  key: { 
        type: Types.Text, 
        default: 'Banner', 
        noedit: true 
        },

  image: {
    type: Types.CloudinaryImages,
    require: true,
    label: "Imagem do Banner",
  },

  titulo: {
    type: Types.Text,
    require: true,
    initial: true,
    index: true,
    label: "Título do Banner",
    note: "Dê um título ao seu Banner"
  },

});

Banner.register();

