import React from 'react'

export const EmailTemplate = ({
  firstName,gmail,messaje
}) => (
  <div>
    <span>Gmail:{gmail}</span> <br />
    <span>Nombre:{firstName}</span> <br />
    <span>Mensaje:{messaje}</span>

  </div>
);