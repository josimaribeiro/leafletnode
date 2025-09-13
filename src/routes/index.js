const express = require('express');
const router = express.Router();
const MapaController = require('../controllers/mapacontroller');

// --- Rota Principal (Menu) ---
router.get('/', (req, res) => {
  let clientIp = req.headers['x-forwarded-for'] || req.ip;

  // Se o endereço for IPv6 com o prefixo ::ffff:, extrai o IPv4
  if (clientIp.includes('::ffff:')) {
    clientIp = clientIp.split(':').pop();
  }
  
  res.render('menu', { clientIp: clientIp });
});

// --- Rotas de Coordenadas ---

// Formulário de cadastro
router.get('/coordenadas/cadastrar', MapaController.formCadastrar);
router.post('/coordenadas/cadastrar', MapaController.cadastrar);

// Listar todas as coordenadas
router.get('/coordenadas/listar', MapaController.listar);

// Rota para o mapa
router.get('/coordenadas/mapa', MapaController.mapa);

// Rota para o mapa com clique
router.get('/coordenadas/mapaclick', MapaController.mapaclick);

// --- Rotas de Edição e Exclusão ---

// Rota para exibir o formulário de edição de uma coordenada específica
// O ":id" é um parâmetro que será capturado pelo controlador
router.get('/coordenadas/editar/:id', MapaController.formEditar);

// Rota para processar a atualização da coordenada editada
router.post('/coordenadas/editar/:id', MapaController.atualizar);

// Rota para deletar uma coordenada específica
// Usamos POST ou DELETE para operações que modificam dados
router.post('/coordenadas/excluir/:id', MapaController.excluir);

router.get('/coordenadas/show/:id', MapaController.show);

module.exports = router;