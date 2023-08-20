# Guts Wrapper

[![npm version](https://img.shields.io/npm/v/guts_wrapper.svg)](https://www.npmjs.com/package/guts_wrapper)
[![License](https://img.shields.io/badge/license-Eldritch%20Mysteries-blue.svg)](https://github.com/Danil-Dorokhin/guts_wrapper/blob/master/LICENSE)

## Beyond the Veil of Loading

The `guts_wrapper` enigma unfurls before the audacious seeker, an arcane tool born from the eldritch depths of code, an artifact to contend with the inscrutable chaos that is Redux. This artifact provides the `GutsWrapper`, a spectral entity to navigate the ebb and flow of loading states within the realms of React.

## Installation Ritual

Invoke the power of `guts_wrapper` using the incantation:

```bash
yarn add guts_wrapper
```

## Unveil the Secrets
### The Emanation of Example

Envelope your components in the tendrils of the `GutsWrapper`, entwined with the ethereal `action` prop:

```bash
import { GutsWrapper, LoadingFallback } from 'guts_wrapper';

// Invoke the GutsWrapper, a manifestation from the mists of 'guts_wrapper'
// Note that you can pass style to GutsWrapper directly and/or provide it with some container component that will be used as wrapper base
const YourComponent = () => {
  return (
    <GutsWrapper
      action="reducerName/actionName"
      style={{display:'flex'}}
      container={<div style={{backgroundColor:'crimson'}} />}
    >
      {/* Peer into the abyss and place your esoteric content here */}
    </GutsWrapper>
  );
};

// Emit the incantation to the realms beyond, a beacon of the enigmatic YourComponent
export default YourComponent;
```

## Enigmatic Glyphs: Prop

GutsWrapper

| Glyph | Nature |Enigma | Revelation |
| --- | --- | --- | --- |
| action | string | --- | The action that beckons the shifting state. |
| children | node	| --- | The essence to enshroud and to unveil. |
| style | CSSProperties | {} | Mystical styles to adorn the GutsWrapper. |
| container | JSX.Element |<div/> | The portal that embraces the arcane journey. |

## The Arcane Path of Development

If thou art drawn to unravel the threads of destiny, heed these words:

I. Ensnare the repository:
```bash
git clone https://github.com/Danil-Dorokhin/guts_wrapper.git
cd guts_wrapper
```
II. Conjure the artifacts:
```bash
yarn
```
III. Manipulate the cosmic forces and witness the metamorphosis:
```bash
yarn dev
```
IV. If the constellations align, proffer a supplication in the form of a pull request.

## Forbidden Knowledge
This creation emerges from the eldritch weave, bound by the enigmatic MIT License - peer into the LICENSE to decipher its inscrutable clauses.
