import React from 'react';
import fotoPerfil from '../src/images/FotoPerfilNovo.jpeg';

export default function Foto() {
  return (
    <div className="foto">
      <img src={fotoPerfil} alt="" className="foto-perfil" />
    </div>
  );
}
