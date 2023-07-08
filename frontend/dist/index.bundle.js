/*! For license information please see index.bundle.js.LICENSE.txt */
  display: inline-block;
  border-top: 2px solid currentcolor;
  border-right: 2px solid currentcolor;
  border-bottom-style: solid;
  border-left-style: solid;
  border-radius: 99999px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-bottom-color: transparent;
  border-left-color: transparent;
  animation: 0.45s linear 0s infinite normal none running ${Ho};
  width: 0.75em;
  height: 0.75em;
  flex-shrink: 0;
`,po.button`
  position: relative;
  border-radius: 0.5em;
  padding: 0.75em 1.25em;
  padding-right: ${e=>e.hasRightElement?"0.75em":"1.25em"};
  padding-left: ${e=>e.hasLeftElement?"0.75em":"1.25em"};
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.5px;
  display: flex;
  gap: 0.5em;
  align-items: center;
  color: ${e=>Zo(e.theme.colors.accent)};
  border: 2px solid
    ${e=>Vo(e.theme.colors.accent)};
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:focus {
    position: relative;
    border-radius: 0.5em;
    outline: 0;
  }
  &:focus:after {
    content: "";
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    border: 2px solid ${e=>e.theme.colors.accent};
    border-radius: 11px;
  }
`);function Vo(e){const t=mo()(e);return"#000000"===t.hex()?"#262627":t.luminosity()<.2?t.lighten(.1).hex():t.darken(.1).hex()}function Ko(e){const t=mo()(e);return"#000000"===t.hex()?"#262627":t.luminosity()<.2?t.lighten(.5).hex():t.darken(.5).hex()}function Zo(e){return mo()(e).isDark()?"#fff":"#000"}po($o)`
  background: ${e=>e.theme.colors.accent};
  &:hover {
    background: ${e=>Vo(e.theme.colors.accent)};
    border-color: ${e=>Vo(e.theme.colors.accent)};
  }
  &:disabled {
    background: ${e=>Ko(e.theme.colors.accent)};
    border-color: ${e=>Ko(e.theme.colors.accent)};
    color: ${e=>Zo(Ko(e.theme.colors.accent))};
  }
`,po($o)`
  background: transparent;
  &:hover {
    background: ${e=>mo()(e.theme.colors.background).alpha(.5).hexa()};
  }
`;G.Fragment,G.Fragment,G.Fragment,G.Fragment,G.Fragment,G.Fragment,G.Fragment,G.Fragment,G.Fragment,G.Fragment;function Go(){console.log("THIS IS FROM APP COMPONET");var e=Co();return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("h1",{children:"This is from the app componet"}),(0,G.jsx)("button",{onClick:e,children:"Connect Metamask"})]})}po.svg`
  border-radius: 0.25em;
  flex-shrink: 0;
  ${e=>e.boxSize?`width: ${e.boxSize};\n    height: ${e.boxSize};`:""}
`,po.li`
  display: flex;
  padding: 0.75em 1em;
  align-items: center;
  gap: 0.5em;
  font-size: 1em;

  ${e=>e.isSelectable?`&:hover,\n  &[data-focus] {\n    cursor: pointer;\n    background: ${mo()(e.theme.colors.text).alpha(.15).hexa()};\n  }`:""}

  > svg {
    flex-shrink: 0;
  }
`,po.ul`
  padding: 0;
  margin: 0;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  list-style: none;
  border-radius: 0.5em;
  overflow: hidden;
  position: relative;
  pointer-events: auto;
  &:focus {
    outline: 0;
  }
  &:after {
    content: "";
    position: absolute;
    border: 1px solid ${e=>e.theme.colors.accent};
    border-radius: 0.5em;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`,po.select`
  margin: -0.25em 0;
  background: ${e=>mo()(e.theme.colors.background).alpha(.85).hexa()};
  color: ${e=>e.theme.colors.text};
  border: 1px solid
    ${e=>mo()(e.theme.colors.text).alpha(.25).hexa()};
  border-radius: 0.25em;
  padding: 0.25em;
  width: 100%;
  flex-shrink: 1;
  font-size: 1em;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 2px solid ${e=>e.theme.colors.accent};
  }
  &:disabled {
    cursor: not-allowed;
  }
`,fe.u.Mainnet,fe.u.Goerli,fe.u.Arbitrum,fe.u.ArbitrumGoerli,fe.u.Avalanche,fe.u.AvalancheFujiTestnet,fe.u.Fantom,fe.u.FantomTestnet,fe.u.Optimism,fe.u.OptimismGoerli,fe.u.Polygon,fe.u.Mumbai,fe.u.BinanceSmartChainMainnet,fe.u.BinanceSmartChainTestnet,fe.u.Hardhat,fe.u.Localhost;var Jo=document.getElementById("root");(0,r.s)(Jo).render((0,G.jsx)(t.StrictMode,{children:(0,G.jsx)(ko,{activeChain:"ethereum",children:(0,G.jsx)(Go,{})})}))}()}();