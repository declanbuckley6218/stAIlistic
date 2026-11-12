# Add Button (Upload Clothing Item) - Design Diagrams

Issue #26. Code: `UploadDialog.tsx`, `wardrobeService.ts`, `wardrobeRepository.ts`, `stailistic_backend/main.py`.

## 1. Conceptual class diagram

```mermaid
classDiagram
    class User
    class Wardrobe
    class ClothingItem {
        name
        category
        color
        photo
    }
    User "1" --> "1" Wardrobe : owns
    Wardrobe "1" --> "M" ClothingItem : contains
```

## 2. Detailed class diagram

```mermaid
classDiagram
    class UploadDialog {
        -image: string
        -name: string
        -type: string
        -color: string
        -error: string
        -submit(e: SubmitEvent) void
    }
    class WardrobeService {
        +addClothingItem(input: NewClothingItem) Promise~ClothingItem~
        -getAiTags(item: NewClothingItem) string[]
    }
    class WardrobeRepository {
        +insertClothingItem(item: ClothingItem) Promise~void~
    }
    class FastAPIEndpoint {
        +insert_clothing_item(item: ClothingItem) ClothingItem
    }
    class ClothingItem {
        +id: string
        +name: string
        +brand: string
        +color: string
        +type: string
        +material: string
        +size: string
        +image: string
        +tags: string[]
    }
    UploadDialog --> WardrobeService : calls
    WardrobeService --> WardrobeRepository : calls
    WardrobeRepository --> FastAPIEndpoint : POST /items
    WardrobeService ..> ClothingItem : creates
```

Layers:

- `UploadDialog` is the UI layer.
- `WardrobeService` is the application layer.
- `WardrobeRepository` and `FastAPIEndpoint` are the persistence layer.

## 3. Sequence diagram - item added

```mermaid
sequenceDiagram
    actor User
    participant UploadDialog
    participant WardrobeService
    participant WardrobeRepository
    participant FastAPIEndpoint as FastAPI Endpoint
    participant Database
    User->>UploadDialog: click Add
    UploadDialog->>WardrobeService: addClothingItem(input)
    WardrobeService->>WardrobeService: check photo and category
    WardrobeService->>WardrobeRepository: insertClothingItem(item)
    WardrobeRepository->>FastAPIEndpoint: POST /items
    FastAPIEndpoint->>Database: INSERT INTO ClothingItem
    FastAPIEndpoint-->>WardrobeRepository: 200 OK
    WardrobeService-->>UploadDialog: ClothingItem
    UploadDialog-->>User: item shows in grid
```

## 4. Sequence diagram - missing photo

```mermaid
sequenceDiagram
    actor User
    participant UploadDialog
    participant WardrobeService
    User->>UploadDialog: click Add with no photo
    UploadDialog->>WardrobeService: addClothingItem(input)
    WardrobeService-->>UploadDialog: Error "Please add a photo."
    UploadDialog-->>User: show error in the form
```
