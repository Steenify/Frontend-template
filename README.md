# Frontend

## Hướng dẫn deploy frontend app

Đứng ở root của cái repo này, gõ lệnh:

```
git subtree push --prefix frontend heroku master
```

# API

- Search color
  URL

```
http://localhost:3000/wp-json/wp/v2/the-gioi-mau-sac-cat?filter[meta_key]=colors_$_name&filter[meta_value]=######&filter[meta_compare]=like
```

Update ###### by color name

- Search location of agency

```
http://localhost:3000/wp-json/wp/v2/agency
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
