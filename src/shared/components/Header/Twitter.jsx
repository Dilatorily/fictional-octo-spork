import React from 'react';
import Icon from './Icon';
import Link from './Link';

const path = 'M1620 1128q-67 -98 -162 -167q1 -14 1 -42q0 -130 -38 -259.5t-115.5 -248.5t-184.5 -210.5t-258 -146t-323 -54.5q-271 0 -496 145q35 -4 78 -4q225 0 401 138q-105 2 -188 64.5t-114 159.5q33 -5 61 -5q43 0 85 11q-112 23 -185.5 111.5t-73.5 205.5v4q68 -38 146 -41 q-66 44 -105 115t-39 154q0 88 44 163q121 -149 294.5 -238.5t371.5 -99.5q-8 38 -8 74q0 134 94.5 228.5t228.5 94.5q140 0 236 -102q109 21 205 78q-37 -115 -142 -178q93 10 186 50z';

const Twitter = () => (
  <Link title="Twitter" href="https://twitter.com/Dagneau" icon>
    <Icon path={path} />
  </Link>
);

export default Twitter;
