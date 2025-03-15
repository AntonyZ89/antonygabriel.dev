export default `
<h2>Tank Battle 2D</h2>
<p>
Um jogo multiplayer estilo <i>artillery game</i> (como ShellShock Live ou Worms ), onde jogadores controlam tanques em um terreno destrutível, alternando turnos para atirar projéteis e eliminar adversários. O jogo combina física realista, estratégia e elementos dinâmicos para criar uma experiência competitiva e divertida.
</p>

<h2>1. Jogabilidade</h2>
<ul>
  <li>
    Multiplayer em Tempo Real:

    <ul>
      <li>
        Até 10 jogadores podem se conectar via WebSocket e competir em partidas simultâneas.
      </li>
      <li>
        Sistema de turnos com temporizador (30 segundos por jogador e 10 minutos para o jogo).
      </li>
    </ul>
  </li>

  <li>
    Terreno Destrutível:

    <ul>
      <li>
        O mapa é gerado proceduralmente e pode ser destruído por explosões, criando novas estratégias a cada partida.
      </li>
    </ul>
  </li>

  <li>
    Controles Intuitivos:

    <ul>
      <li>
        Ajuste de ângulo e potência do tiro via teclado (ou toque em dispositivos móveis).
      </li>
      <li>
        Movimentação suave do tanque com inclinação automática conforme o terreno.
      </li>
    </ul>
  </li>

  <li>
    Física Realista:

    <ul>
      <li>
        Projéteis são afetados por gravidade e colisões com o terreno.
      </li>
      <li>
        Sistema de dano baseado na distância do impacto.
      </li>
    </ul>
  </li>
</ul>

<h2>2. Interface e Experiência do Usuário</h2>
<ul>
  <li>
    HUD Personalizado:

    <ul>
      <li>
        Barra de vida, temporizador, ângulo e potência do tiro.
      </li>
      <li>
        Indicador visual (seta vermelha) para destacar o jogador ativo.
      </li>
    </ul>
  </li>

  <li>
    Responsividade:

    <ul>
      <li>
        Compatível com dispositivos móveis via controles touch e redimensionamento automático.
      </li>
      <li>
        Câmera deslizante para explorar o mapa ultrawide (4096px de largura).
      </li>
    </ul>
  </li>

  <li>
    Efeitos Visuais e Sonoros:

    <ul>
      <li>
        Partículas de explosão, animações de impacto e música de fundo.
      </li>
      <li>
        Sons diferenciados para tiros, explosões e danos.
      </li>
    </ul>
  </li>
</ul>

<h2>3. Tecnologias Utilizadas</h2>

<ul>
  <li>
Backend:

    <ul>
      <li>
Bun.js para servidor HTTP.
      </li>
      <li>
Socket.IO para comunicação em tempo real.
      </li>
      <li>
        JWT para autenticação segura.
      </li>
    </ul>
  </li>

  <li>
    Frontend:

    <ul>
      <li>
        HTML5 Canvas para renderização do jogo.
      </li>
      <li>
        Cloudflare SSL para criptografia (WSS/HTTPS).
      </li>
    </ul>
  </li>

  <li>
    Infraestrutura:

    <ul>
      <li>
        Proxy reverso via Apache para balanceamento de carga e segurança.
      </li>
    </ul>
  </li>
</ul>

<h2>4. Sistema de Progressão</h2>

<ul>
  <li>
Ranking Global:

    <ul>
      <li>
        Pontuação baseada em eliminações e desempenho.
      </li>
      <li>
        Classificação persistente entre partidas.
      </li>
    </ul>
  </li>

  <li>
    Power-Ups (Em Desenvolvimento):

    <ul>
      <li>
        Planos para incluir itens como escudo, cura e munição especial.
      </li>
    </ul>
  </li>
</ul>

<h2>5. Destaques Técnicos</h2>

<ul>
  <li>
Geração Procedural de Terreno:

    <ul>
      <li>
Algoritmo que cria mapas únicos a cada partida, com obstáculos aleatórios.
      </li>
    </ul>
  </li>

  <li>
Sincronização de Estado:

    <ul>
      <li>
O servidor gerencia o estado do jogo (projéteis, terreno, vida) e sincroniza os clientes em tempo real.
      </li>
    </ul>
  </li>
</ul>
`
