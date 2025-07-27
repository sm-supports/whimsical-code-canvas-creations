# Android Project Context: [Your App Name]

## Project Overview
A modern Android application built with Kotlin and following Material Design 3 principles. Implements MVVM architecture, clean code practices, and modern Android development patterns. Features offline-first capabilities, smooth animations, and a responsive UI that adapts to different screen sizes.

## Technical Stack
- **Language**: Kotlin
- **Minimum SDK**: 24 (Android 7.0)
- **Target SDK**: 34 (Android 14)
- **Architecture**: MVVM with Clean Architecture
- **UI Framework**: Jetpack Compose
- **State Management**: Kotlin Flow & StateFlow
- **Dependency Injection**: Hilt
- **Database**: Room
- **Networking**: Retrofit with OkHttp
- **Testing**: JUnit, Espresso, MockK
- **Build System**: Gradle with KTS

## Project Structure
```
app/
├── build.gradle.kts            # App-level build config
├── src/
│   ├── main/
│   │   ├── java/com.your.app/
│   │   │   ├── di/            # Dependency injection modules
│   │   │   ├── data/          # Data layer
│   │   │   │   ├── local/     # Local storage (Room)
│   │   │   │   ├── remote/    # API services
│   │   │   │   ├── model/     # Data models
│   │   │   │   └── repository/ # Repository implementations
│   │   │   ├── domain/        # Domain layer
│   │   │   │   ├── model/     # Domain models
│   │   │   │   ├── repository/ # Repository interfaces
│   │   │   │   └── usecase/   # Business logic
│   │   │   ├── presentation/  # UI layer
│   │   │   │   ├── theme/     # App theme
│   │   │   │   ├── components/ # Reusable composables
│   │   │   │   └── screens/   # App screens
│   │   │   └── util/         # Utilities
│   │   ├── res/              # Resources
│   │   └── AndroidManifest.xml
│   ├── test/                 # Unit tests
│   └── androidTest/          # Instrumentation tests
└── proguard-rules.pro       # ProGuard rules
```

## Architecture Components

### Data Layer
- **Repository Pattern**
  - Single source of truth
  - Offline-first approach
  - Data synchronization strategies
  - Error handling and retry mechanisms

- **Local Storage**
  - Room Database
  - DataStore Preferences
  - File Storage
  - WorkManager for background tasks

- **Remote Data**
  - Retrofit API services
  - Response mapping
  - Error handling
  - Token management

### Domain Layer
- **Use Cases**
  - Business logic encapsulation
  - Input validation
  - Error handling
  - Data transformation

- **Domain Models**
  - Clean data classes
  - Business logic validators
  - Type converters

### Presentation Layer

#### ViewModels
- StateFlow for UI state management
- Error handling and user feedback
- Navigation control
- Data transformation for UI

#### UI Components
- **Base Components**
  - Custom Text styles
  - Buttons
  - Input fields
  - Cards
  - Loading indicators

- **Screen Templates**
  - List/Grid layouts
  - Detail views
  - Forms
  - Dialog boxes

### Navigation
- **Jetpack Navigation**
  - Type-safe navigation
  - Deep linking support
  - Argument passing
  - Navigation animations

### Theme System
- **Material Design 3**
  - Dynamic color support
  - Light/Dark theme
  - Custom color system
  - Typography scale
  - Shape system
  - Custom icons

### State Management
- UI State representation
- Side effect handling
- Error states
- Loading states
- Empty states

## Features and Capabilities

### Core Features
1. **Authentication**
   - Login/Registration
   - Token management
   - Biometric authentication
   - Password recovery

2. **Data Synchronization**
   - Background sync
   - Conflict resolution
   - Retry mechanisms
   - Progress tracking

3. **Offline Support**
   - Local data caching
   - Background operations
   - Sync queue management
   - Network state monitoring

### UI/UX Features
1. **Animations**
   - Screen transitions
   - Loading animations
   - Content transitions
   - Gesture responses

2. **Responsive Design**
   - Different screen sizes
   - Orientation changes
   - Foldable support
   - Adaptive layouts

## Development Patterns

### Dependency Injection
- Hilt modules
- Scoped dependencies
- Testing modules
- Qualifiers

### Testing Strategy
- **Unit Tests**
  - ViewModel testing
  - Use Case testing
  - Repository testing
  - Utility testing

- **Integration Tests**
  - Database testing
  - API testing
  - Flow testing

- **UI Tests**
  - Component testing
  - Screen testing
  - Navigation testing
  - End-to-end testing

### Error Handling
- Exception mapping
- User feedback
- Crash reporting
- Analytics logging

## Performance Considerations
- Memory management
- Battery efficiency
- Network optimization
- Image loading
- Database queries
- Background processing

## Security Measures
- Data encryption
- Secure communication
- API key protection
- ProGuard rules
- Certificate pinning

## Build Configuration
- **Product Flavors**
  - Development
  - Staging
  - Production

- **Build Types**
  - Debug
  - Release
  - Benchmark

### CI/CD Pipeline
- GitHub Actions
- Automated testing
- Build distribution
- Version management

## Future Development Areas
1. Implement ML features
2. Add AR capabilities
3. Enhance offline capabilities
4. Implement real-time features
5. Add widget support
6. Implement backup/restore
7. Add wear OS support
8. Enhance accessibility

## Accessibility
- TalkBack support
- Content descriptions
- Contrast requirements
- Touch target sizes
- Keyboard navigation

This context file serves as a comprehensive guide for AI assistance in Android development tasks, providing necessary context about the project's architecture, patterns, and conventions.
