const Coordenada = require('../models/coordenada');

module.exports = {

  // Formulário de Edição
  formEditar: async (req, res) => {
    try {
      const { id } = req.params;
      const coordenada = await Coordenada.findByPk(id);
      if (!coordenada) {
        return res.status(404).send('Coordenada não encontrada.');
      }
      res.render('editar', { coordenada }); 
    } catch (err) {
      res.status(500).send('Erro ao carregar formulário de edição: ' + err.message);
    }
  },



  // Atualizar POST
  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, latitude, longitude } = req.body;
      const coordenada = await Coordenada.findByPk(id);
      if (!coordenada) {
        return res.status(404).send('Coordenada não encontrada.');
      }
      await coordenada.update({ nome, latitude, longitude });
      res.redirect('/coordenadas/listar');
    } catch (err) {
      res.status(500).send('Erro ao atualizar coordenada: ' + err.message);
    }
  },

  // Excluir POST
  excluir: async (req, res) => {
    try {
      const { id } = req.params;
      const coordenada = await Coordenada.findByPk(id);
      if (!coordenada) {
        return res.status(404).send('Coordenada não encontrada.');
      }
      await coordenada.destroy();
      res.redirect('/coordenadas/listar');
    } catch (err) {
      res.status(500).send('Erro ao excluir coordenada: ' + err.message);
    }
  },

  // Página do mapa
  mapa: async (req, res) => { // Corrigido
    try {
      const coordenadas = await Coordenada.findAll();
      const coordenadasJson = JSON.stringify(coordenadas);
      res.render('mapa', { coordenadas, coordenadasJson });
    } catch (err) {
      res.status(500).send('Erro ao carregar coordenadas: ' + err.message);
    }
  },

  // Página do mapa com clique
  mapaclick: async (req, res) => { // Corrigido
    try {
      const coordenadas = await Coordenada.findAll();
      const coordenadasJson = JSON.stringify(coordenadas);
      res.render('mapaclick', { coordenadas, coordenadasJson });
    } catch (err) {
      res.status(500).send('Erro ao carregar coordenadas: ' + err.message);
    }
  },

  // Formulário de cadastro
  formCadastrar: (req, res) => { // Esta função não é assíncrona, não precisa do "async"
    res.render('cadastrar');
  },

  // Cadastro POST
  cadastrar: async (req, res) => { // Corrigido
    try {
      const { nome, latitude, longitude } = req.body;
      await Coordenada.create({ nome, latitude, longitude });
      res.redirect('/coordenadas/listar');
    } catch (err) {
      res.status(500).send('Erro ao cadastrar coordenada: ' + err.message);
    }
  },

  // Listar todas
  listar: async (req, res) => { // Corrigido
    try {
      const coordenadas = await Coordenada.findAll();
      res.render('listar', { coordenadas }); 
    } catch (err) {
      res.status(500).send('Erro ao listar coordenadas: ' + err.message);
    }
  
  },

show: async (req, res) => {
    try {
      const { id } = req.params;
      const coordenada = await Coordenada.findByPk(id);
      if (!coordenada) {
        return res.status(404).send('Coordenada não encontrada.');
      }
      res.render('showmapa', { coordenada }); // Renderiza a view 'showmapa'
    } catch (err) {
      res.status(500).send('Erro ao carregar a coordenada: ' + err.message);
    }
  }




};