import React, { Component } from 'react';
import Input from './Input';
import { rollD20 } from './utils';

export default ({
  id,
  name,
  initiative,
  hitpoints,
  armorclass,
  onNameChange,
  onInitiativeChange,
  onHitpointsChange,
  onArmorClassChange,
  onRemove,
}) =>
  <div className="card">
    <Input
      label="Name"
      type="text"
      value={name}
      onChange={e => onNameChange(id, e)}
    />

    <Input
      label="Initiative"
      type="number"
      value={initiative}
      onChange={e => onInitiativeChange(id, e)}
    />

    <button
      onClick={() => onInitiativeChange(id, { target: { value: rollD20() } } )}
    >
      Roll Initiative
    </button>

    <Input
      label="Hitpoints"
      type="number"
      value={hitpoints}
      onChange={e => onHitpointsChange(id, e)}
    />
    
    <Input
      label="Armor Class"
      type="number"
      value={armorclass}
      onChange={e => onArmorClassChange(id, e)}
    />

    <button onClick={() => onRemove(id)}>X</button>
  </div>;
  