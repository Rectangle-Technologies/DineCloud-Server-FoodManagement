# Food Server Backend Docs

This project contains API endpoints for Food Management server.




## Installation

To run the project, first clone the project from github with the following command

```bash
  git clone git@github.com:Rectangle-Technologies/DineCloud-Server-Billing.git
```
Install the node modules

```bash
  npm i
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`

`NODE_ENV`

`PORT`

`JWT_ALGORITHM`

`ENCRYPTION_ALGORITHM`

`JWT_TOKEN_SECRET`

`AES_GCM_ENCRYPTION_KEY`

`AES_GCM_ENCRYPTION_IV`

`FEATURE_API_INPUT_SCHEMA_VALIDATION`

`BASE_CLIENT_CODE`

`DINECLOUD_DOMAINMODEL_SERVER_URL`


## Start the server

To start the server run

```bash
  node index.js
```


## API Reference

### Summary

**Food:**
#### 1. Create food item

**Menu Section:**
#### 8. Remove food item from menu section

### Food

#### 1. Create food item

```http
  POST /api/food/createFoodItem
```

It creates a new food item.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of food item |
| `price`      | `number` | **Required**. Price of food item |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |
| `description`      | `string` | Description of food item |
| `categories`      | `array` | Categories to which the food item belongs |
| `ingredients`      | `array` | Ingredients of the food item |
| `calories`      | `number` | Calories of the food item |
| `imageUrl`      | `boolean` | S3 url of food item image |
| `highlights`      | `array` | Special highlights of food item |
| `spiciness`      | `string` | Spiciness level of food item ['low', 'medium', 'high'] |
| `menuSectionId`      | `string` | Provide if a menu section for the food item exists |

#### 2. Get all food items

```http
  POST /api/food/getAllFoodItems 
```

It fetches all food items for the client.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

#### 3. Get food item by id

```http
  POST /api/food/getFoodItem?id=${id} 
```

It fetches a food item by id for the client.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

#### 4. Update food item

```http
  PUT /api/food/updateFoodItem?id=${id} 
```

It updates the food item for the client.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of food item |
| `price`      | `number` | **Required**. Price of food item |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |
| `description`      | `string` | Description of food item |
| `categories`      | `array` | Categories to which the food item belongs |
| `ingredients`      | `array` | Ingredients of the food item |
| `calories`      | `number` | Calories of the food item |
| `imageUrl`      | `boolean` | S3 url of food item image |
| `highlights`      | `array` | Special highlights of food item |
| `spiciness`      | `string` | Spiciness level of food item ['low', 'medium', 'high'] |
| `menuSectionId`      | `string` | Provide if a menu section for the food item exists |

#### 5. Delete food item

```http
  DELETE /api/food/deleteFoodItem?id=${id} 
```

It deletes the food item for the client.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

### Menu Section

#### 1. Create a menu section

```http
  POST /api/menuSection/createMenuSection
```

It creates a new menu section.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of food item |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

#### 2. Get all menu sections

```http
  POST /api/menuSection/getAllMenuSections
```

It fetches all menu sections.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

#### 3. Get a menu section by id

```http
  POST /api/menuSection/getMenuSectionById
```

It fetches a menu section by id.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

#### 4. Update a menu section

```http
  PUT /api/menuSection/updateMenuSection?id=${id}
```

It updates the menu section.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of food item |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

#### 5. Delete a menu section

```http
  POST /api/menuSection/deleteMenuSection?id=${id}
```

It deletes a menu section.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

#### 6. Add food item to menu section

```http
  POST /api/menuSection/addFoodItemToMenuSection?id=${menuSectionId}
```

It adds a food item to the menu section.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `foodItemId`      | `string` | **Required**. Id of the food itme to be added |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

#### 7. Get food items by menu section

```http
  POST /api/menuSection/getFoodItemsByMenuSectionId?id=${menuSectionId}
```

It fetches food items for the menu section.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

#### 8. Remove food item from menu section

```http
  POST /api/menuSection/removeFoodItemFromMenuSection?id=${menuSectionId}
```

It removes a food item from the menu section.

**Headers**
| Parameter | Value  |
| :-------- | :------- |
| `Authorization`      | `Bearer ${token}` | 

**Body**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `foodItemId`      | `string` | **Required**. Id of the food itme to be removed |
| `branchId`      | `string` | **Required**. Branch id of the client |
| `branchCode`      | `string` | **Required**. Branch code of the client |

**Note:** Anything written within ${} represents a variable and has to be replaced by the value.
