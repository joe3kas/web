import { configureStore } from '@reduxjs/toolkit';
// reducer
import noticias from './slices/noticias';
import docentes from './slices/docente';
import galerias from './slices/galeria';
import sliders  from './slices/slider';
import honors from './slices/honor'

export default configureStore({
  reducer: {
    noticias,
    docentes,
    galerias,
    sliders,
    honors
  }
});