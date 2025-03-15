export default `
<h2>Tank Battle 2D</h2>
<p>
A multiplayer game in the <i>artillery game</i> style (similar to ShellShock Live or Worms), where players control tanks on a destructible terrain, taking turns to fire projectiles and eliminate opponents. The game combines realistic physics, strategy, and dynamic elements to create a competitive and fun experience.
</p>

<h2>1. Gameplay</h2>
<ul>
  <li>
    Real-Time Multiplayer:

    <ul>
      <li>
        Up to 10 players can connect via WebSocket and compete in simultaneous matches.
      </li>
      <li>
        Turn-based system with a timer (30 seconds per player and 10 minutes per match).
      </li>
    </ul>
  </li>

  <li>
    Destructible Terrain:

    <ul>
      <li>
        The map is procedurally generated and can be destroyed by explosions, creating new strategies in every match.
      </li>
    </ul>
  </li>

  <li>
    Intuitive Controls:

    <ul>
      <li>
        Adjust the shot angle and power using the keyboard (or touch controls on mobile devices).
      </li>
      <li>
        Smooth tank movement with automatic tilting based on the terrain.
      </li>
    </ul>
  </li>

  <li>
    Realistic Physics:

    <ul>
      <li>
        Projectiles are affected by gravity and collisions with the terrain.
      </li>
      <li>
        Damage system based on impact distance.
      </li>
    </ul>
  </li>
</ul>

<h2>2. User Interface and Experience</h2>
<ul>
  <li>
    Custom HUD:

    <ul>
      <li>
        Health bar, timer, shot angle, and power.
      </li>
      <li>
        Visual indicator (red arrow) to highlight the active player.
      </li>
    </ul>
  </li>

  <li>
    Responsiveness:

    <ul>
      <li>
        Compatible with mobile devices via touch controls and automatic resizing.
      </li>
      <li>
        Sliding camera to explore the ultrawide map (4096px width).
      </li>
    </ul>
  </li>

  <li>
    Visual and Sound Effects:

    <ul>
      <li>
        Explosion particles, impact animations, and background music.
      </li>
      <li>
        Distinct sounds for shots, explosions, and damage.
      </li>
    </ul>
  </li>
</ul>

<h2>3. Technologies Used</h2>

<ul>
  <li>
Backend:

    <ul>
      <li>
Bun.js for the HTTP server.
      </li>
      <li>
Socket.IO for real-time communication.
      </li>
      <li>
        JWT for secure authentication.
      </li>
    </ul>
  </li>

  <li>
    Frontend:

    <ul>
      <li>
        HTML5 Canvas for game rendering.
      </li>
      <li>
        Cloudflare SSL for encryption (WSS/HTTPS).
      </li>
    </ul>
  </li>

  <li>
    Infrastructure:

    <ul>
      <li>
        Reverse proxy via Apache for load balancing and security.
      </li>
    </ul>
  </li>
</ul>

<h2>4. Progression System</h2>

<ul>
  <li>
Global Ranking:

    <ul>
      <li>
        Score based on eliminations and performance.
      </li>
      <li>
        Persistent ranking across matches.
      </li>
    </ul>
  </li>

  <li>
    Power-Ups (In Development):

    <ul>
      <li>
        Plans to include items like shields, healing, and special ammunition.
      </li>
    </ul>
  </li>
</ul>

<h2>5. Technical Highlights</h2>

<ul>
  <li>
Procedural Terrain Generation:

    <ul>
      <li>
Algorithm that creates unique maps for each match, with random obstacles.
      </li>
    </ul>
  </li>

  <li>
State Synchronization:

    <ul>
      <li>
The server manages the game state (projectiles, terrain, health) and synchronizes clients in real-time.
      </li>
    </ul>
  </li>
</ul>
`
