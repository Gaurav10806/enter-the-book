# The Missing Nation — Immersive Book Experience

> Transforming books from passive reading experiences into interactive digital worlds.

An immersive digital experience platform that allows readers to explore a book through interactive storytelling, 3D characters, story locations, cinematic scenes, and audio experiences.

This project is a working prototype built around *The Missing Nation* by Rohit Agarwal as a proof of concept for transforming conventional books into interactive digital experiences.

## Demo

[Watch Demo Video](https://drive.google.com/file/d/1gVIaw6p779jRKCPK5mXR9u6Z99IHKh9q/view?usp=sharing)

## Problem

Traditional books primarily provide a passive reading experience, while publishers have limited ways to turn their existing stories into interactive digital experiences.

## Solution

Our platform transforms a book into multiple immersive experiences where readers can **enter, explore, interact, and experience the world of the story**.

Instead of replacing traditional reading, the platform acts as an **immersive companion to the book**.

## Key Features

### Interactive Story
Readers can explore a cinematic story environment, investigate important objects, and make choices that influence the narrative flow.

### 3D Character Experience
Explore characters from the story through interactive 3D models.

- 360° mouse-based rotation
- Zoom in/out
- Character information
- Story role and background
- Desktop-friendly experience

### Story Atlas
An interactive narrative map that connects important locations, characters, and events from the story.

Instead of functioning like a conventional geographical map, it presents the world of the book as a **story-driven atlas**.

### Cinematic Video Scenes
Important moments from the story are presented through cinematic video scenes with branching choices.

```text
Scene 1
  ├── Scene 2A
  │     ├── Scene 3
  │     └── Return to Scene 1
  │
  └── Scene 2B
        └── Scene 3
```

### Audio Experience
The prototype includes an audio narration experience using browser-based speech synthesis.

### Role-Based Platform
The prototype contains different experiences for:

- Reader
- Publisher
- Admin

## How It Works

```text
             BOOK
               ↓
       Content & Story
               ↓
      Experience Selection
               ↓
 ┌─────────────┼─────────────┐
 ↓             ↓             ↓
Interactive   3D          Story
 Story      Characters     Atlas
 ↓             ↓             ↓
Choices      Explore      Locations
               ↓
        Reader Engagement
```

The long-term platform vision is:

```text
Publisher
    ↓
Book
    ↓
Content Analysis
    ↓
Experience Templates
    ↓
Interactive Experiences
    ↓
Readers
```

Different genres can be mapped to different experiences. For example, a thriller could use an investigation-based interactive story, while fantasy could focus more on 3D world exploration.

## Technology Stack

### Frontend
- HTML5
- JavaScript
- React 19
- Vite
- Tailwind CSS
- Custom CSS
- Lucide Icons

### 3D & Immersive Experience
- Three.js
- OrbitControls
- GLTFLoader
- GLB 3D Models

### Media & Browser APIs
- HTML5 Video
- Web Speech API / SpeechSynthesis
- Browser Mouse and Interaction APIs

### Architecture

The current prototype uses a **hybrid frontend architecture**:

- The main immersive application is implemented using HTML and JavaScript.
- React is used for the Story Atlas component.
- Three.js powers the 3D experiences.
- GLTFLoader imports 3D `.glb` assets.
- OrbitControls provides desktop mouse-based camera interaction.

## 3D Character Pipeline

```text
Mrityunjay.glb
      ↓
  GLTFLoader
      ↓
Three.js Scene
      ↓
     Camera
      ↓
 OrbitControls
      ↓
Mouse Drag / Zoom
      ↓
Interactive 3D Character
```

Three.js provides the 3D rendering environment, GLTFLoader loads the `.glb` character model, and OrbitControls allows the user to orbit and zoom around the character.

## Why Three.js?

Three.js allows us to create browser-based 3D experiences without implementing low-level WebGL rendering from scratch.

The experience is designed to work on a normal **desktop/laptop browser**, so a dedicated VR headset is not required for the current prototype.

## Business Model

The proposed business model is **B2B2C**.

```text
        PUBLISHERS
             ↓
     Platform Subscription
       / Per-Book Package
             ↓
   IMMERSIVE PLATFORM
             ↓
          READERS
```

### Publisher Value

Publishers can potentially use the platform to:

- Create immersive experiences around existing books
- Increase reader engagement
- Create additional digital touchpoints
- Present characters, locations, and story moments interactively
- Eventually access engagement analytics

### Future Revenue Opportunities

- Per-book experience packages
- Publisher subscriptions
- Premium experience creation
- Custom publisher experiences
- Advanced analytics

## Current Prototype vs Future Vision

### Implemented

- Book-based experience interface
- Interactive story
- Branching video narrative
- 3D character viewer
- GLB character integration
- Mouse-based 360° interaction
- Story Atlas
- Audio narration prototype
- Reader / Publisher / Admin interfaces
- Experience selection system
- Notifications
- Cinematic UI

### Future Scope

- AI-assisted book content analysis
- Automatic extraction of characters, locations, and events
- Genre-based experience recommendations
- Automated experience generation
- Backend authentication
- Persistent reader progress
- Publisher content management
- Production analytics
- More books and genres
- Additional immersive experiences
- Cloud-based scalable publisher platform

## Project Vision

The long-term vision is to build an **experience engine for books**.

Instead of creating one fixed digital experience for every book, the platform can identify the important elements of a story and provide suitable experiences based on its genre and content.

> **One Book → Multiple Experiences → One Immersive Platform**

## Demo

[Watch the Complete Working Prototype](https://drive.google.com/file/d/1gVIaw6p779jRKCPK5mXR9u6Z99IHKh9q/view?usp=sharing)
