# Frontend

## How to run it

Đứng ở root của cái repo này, gõ lệnh:

**Install dependency**
```
npm install
```

**Start Develop**
```
npm run dev
```

**Build Project**
```
npm run build
```

# SCSS

responsive mixin
  example:

```
  p {
    font-size: em(16px);
    light-hight: em(24, 30)
    @include max-sm() {
      font-size: em(16px);
    }

    @media(max-width: 400px) {
      font-size: em(12);
    }
  }
```

variable mixin em
  example:
  ```
  p {
    font-size: em(16px);
    light-hight: em(24, 30)
  }
  ```
