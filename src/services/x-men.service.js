const xMen = [
  {
    character: 'Wolverine',
    skills:
      'Além de suas mortais garras de adamantium capazes de cortar qualquer coisa, ele tem um poderoso fato de cura; envelhece lentamente – o que o torna praticamente imortal -; e tem diversas características animais, como sentidos muito aguçados.',
    age: 135,
    gender: 'Masculino',
    origin:
      'O que se sabe com certeza é que o homem que durante muitos anos foi chamado simplesmente de Logan nasceu James Howlett, no Canadá, na segunda metade do século XIX. Depois de uma tragédia familiar, James assumiu o nome Logan e passou o resto de sua adolescência nas florestas daquele país.',
    id: 1,
  },
  {
    character: 'Tempestade',
    skills:
      'Ela é capaz de manipular o tempo, e alterar o clima, assim tendo influência sobre os elementos da natureza. Pode alterar a pressão atmosférica a Temperatura e Umidade. É capaz de controlar os elementos climáticos, criar chuvas, tempestades, trovões, relâmpagos, raios, tornados, neve, neblina, etc.',
    age: 30,
    gender: 'Feminino',
    origin:
      'Tempestade é descendente de uma antiga linha de feiticeiras africanas. Todas têm cabelos brancos, olhos azuis e potencial para usar magia.',
    id: 2,
  },
  {
    character: 'Charles Francis Xavier',
    skills:
      'Criação de Ilusões; Manipulação Mental; Projeção Astral; Intelecto Nível Gênio',
    age: 60,
    gender: 'Masculino',
    origin:
      'era o filho de um renomado cientista nuclear. Após a morte de seu pai, sua mãe se casou com um homem bruto e violento, o que causou problemas durante a juventude do mutante, que tinha que conviver com seu meio-irmão, Cain Marko - que se tornaria o Fanático.',
    id: 3,
  },
  {
    character: 'Mística',
    skills:
      'Mudança de forma; Agilidade Sobre-Humana; Fator de Cura Regenerativo; Mestre Lutadora',
    age: 59,
    gender: 'Feminino',
    origin: 'Sua origem é um mistério',
    id: 4,
  },
  {
    character: 'Magneto',
    skills:
      'Manipulação do Magnetismo; Campos de Força Magnéticos; Manipulação de metais; Levitação; Intelecto Nível-Gênio',
    age: 63,
    gender: 'Masculino',
    origin:
      'Nascido Max Eisenhardt, Magneto tem sua origem na Alemanha. Sua infância foi marcada pela ascensão de Hitler e do Partido Nazista.',
    id: 5,
  },
];

const findServiceAllXmen = () => {
  return xMen;
};

const findServiceIdXmen = (id) => {
  return xMen.find((el) => el.id === id);
};

const createServiceXmen = (newXm) => {
  const newX = xMen.length + 1;
  newXm.id = newX;
  xMen.push(newXm);
  return newXm;
};

const updateServiceXmen = (id, xEdt) => {
  Number((xEdt[`id`] = id));
  const xIndex = xMen.findIndex((el) => el.id === id);
  return (xMen[xIndex] = xEdt);
};

const deleteServiceXmen = (id) => {
  const idNum = Number(id);
  const xIndex = xMen.findIndex((el) => el.id === idNum);
  return xMen.splice(xIndex, 1);
};

module.exports = {
  findServiceAllXmen,
  findServiceIdXmen,
  createServiceXmen,
  updateServiceXmen,
  deleteServiceXmen,
};
