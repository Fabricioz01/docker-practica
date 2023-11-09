import { Router } from 'express';

import { ClienteRoutes} from './Cliente/routes'
import {ContratoRoutes} from './Contrato/routes'
import {EventoRoutes} from './Evento/routes'
import {PersonaRoutes} from './Persona/routes'
import {ProveedorRoutes} from './Proveedor/routes'
import {TipoeventoRoutes} from './TipoEvento/routes'

export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    router.use('/api/Cliente', ClienteRoutes.routes)
    router.use('/api/Contato',ContratoRoutes.routes)
    router.use('/api/Evento',EventoRoutes.routes)
    router.use('/api/Persona',PersonaRoutes.routes)
    router.use('/api/Proveedor',ProveedorRoutes.routes)
    router.use('/api/TipoEvento',TipoeventoRoutes.routes)
    return router;
  }


}

