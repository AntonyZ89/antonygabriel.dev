export default `
<h2>Tank Battle 2D</h2>
<p>
Un juego multijugador estilo <i>artillery game</i> (similar a ShellShock Live o Worms), donde los jugadores controlan tanques en un terreno destructible, alternando turnos para disparar proyectiles y eliminar oponentes. El juego combina física realista, estrategia y elementos dinámicos para crear una experiencia competitiva y divertida.
</p>

<h2>1. Jugabilidad</h2>
<ul>
  <li>
    Multijugador en Tiempo Real:

    <ul>
      <li>
        Hasta 10 jugadores pueden conectarse mediante WebSocket y competir en partidas simultáneas.
      </li>
      <li>
        Sistema por turnos con temporizador (30 segundos por jugador y 10 minutos por partida).
      </li>
    </ul>
  </li>

  <li>
    Terreno Destructible:

    <ul>
      <li>
        El mapa se genera proceduralmente y puede ser destruido por explosiones, creando nuevas estrategias en cada partida.
      </li>
    </ul>
  </li>

  <li>
    Controles Intuitivos:

    <ul>
      <li>
        Ajuste de ángulo y potencia del disparo mediante teclado (o toque en dispositivos móviles).
      </li>
      <li>
        Movimiento fluido del tanque con inclinación automática según el terreno.
      </li>
    </ul>
  </li>

  <li>
    Física Realista:

    <ul>
      <li>
        Los proyectiles son afectados por la gravedad y las colisiones con el terreno.
      </li>
      <li>
        Sistema de daño basado en la distancia del impacto.
      </li>
    </ul>
  </li>
</ul>

<h2>2. Interfaz y Experiencia de Usuario</h2>
<ul>
  <li>
    HUD Personalizado:

    <ul>
      <li>
        Barra de vida, temporizador, ángulo y potencia del disparo.
      </li>
      <li>
        Indicador visual (flecha roja) para resaltar al jugador activo.
      </li>
    </ul>
  </li>

  <li>
    Responsividad:

    <ul>
      <li>
        Compatible con dispositivos móviles mediante controles táctiles y redimensionamiento automático.
      </li>
      <li>
        Cámara deslizante para explorar el mapa ultraancho (4096px de ancho).
      </li>
    </ul>
  </li>

  <li>
    Efectos Visuales y Sonoros:

    <ul>
      <li>
        Partículas de explosión, animaciones de impacto y música de fondo.
      </li>
      <li>
        Sonidos diferenciados para disparos, explosiones y daños.
      </li>
    </ul>
  </li>
</ul>

<h2>3. Tecnologías Utilizadas</h2>

<ul>
  <li>
Backend:

    <ul>
      <li>
Bun.js para el servidor HTTP.
      </li>
      <li>
Socket.IO para comunicación en tiempo real.
      </li>
      <li>
        JWT para autenticación segura.
      </li>
    </ul>
  </li>

  <li>
    Frontend:

    <ul>
      <li>
        HTML5 Canvas para la renderización del juego.
      </li>
      <li>
        Cloudflare SSL para encriptación (WSS/HTTPS).
      </li>
    </ul>
  </li>

  <li>
    Infraestructura:

    <ul>
      <li>
        Proxy inverso mediante Apache para balanceo de carga y seguridad.
      </li>
    </ul>
  </li>
</ul>

<h2>4. Sistema de Progresión</h2>

<ul>
  <li>
Ranking Global:

    <ul>
      <li>
        Puntuación basada en eliminaciones y rendimiento.
      </li>
      <li>
        Clasificación persistente entre partidas.
      </li>
    </ul>
  </li>

  <li>
    Power-Ups (En Desarrollo):

    <ul>
      <li>
        Planes para incluir ítems como escudo, curación y munición especial.
      </li>
    </ul>
  </li>
</ul>

<h2>5. Aspectos Técnicos Destacados</h2>

<ul>
  <li>
Generación Procedural de Terreno:

    <ul>
      <li>
Algoritmo que crea mapas únicos en cada partida, con obstáculos aleatorios.
      </li>
    </ul>
  </li>

  <li>
Sincronización de Estado:

    <ul>
      <li>
El servidor gestiona el estado del juego (proyectiles, terreno, vida) y sincroniza a los clientes en tiempo real.
      </li>
    </ul>
  </li>
</ul>
`
