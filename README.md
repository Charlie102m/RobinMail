# RobinMail

Mail server for front end web developers to POST to when email sending is required.

This is a free to use, open-source API that doesn't currently require authentication to use.

You must add your site url to the approved sites list first before you will be able to use this service.

## Indices

- [Admin](#admin)

  - [Add Approved Site](#1-add-approved-site)
  - [Get Approved Sites](#2-get-approved-sites)

- [Mailer](#mailer)

  - [Instructions](#1-instructions)
  - [Send Mail](#2-send-mail)

---

## Admin

Before you are able to use this service, you must first submit a POST request to add your url & destination email to the approved sites list.

The destination email associated with your url is private and can not be accessed publically via this api once submitted with your initial request.

If you need to update your destination email, please get in touch.

### 1. Add Approved Site

Url's must be unique and only one destination email is currently supported per url.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://www.robinmail.org/api/v1/approvedsites
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json |             |

**_Body:_**

```js
{
	"url": "www.123.co.uk",
	"email": "abc@123.co.uk"
}
```

### 2. Get Approved Sites

Currently, all approved site url's are public.

This endpoint will allow you to check if your url is on the approved sites list.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://www.robinmail.org/api/v1/approvedsites
```

## Mailer

Sending mail with RobinMail couldn't be easier!

All that is required is an object with 4 key value pairs as detailed below.

Remember, before using this service for the first time you must add your url & destination email to our approved sites list. See the Admin section above for more details.

### 1. Instructions

Need detailed instructions on what to post?

Send a GET request here to see what is required.

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://www.robinmail.org/api/v1/mailer
```

### 2. Send Mail

Once your POST request is made, if successful your email will be sent to your registered destination email, submitted when you added your url to the approved sites list.

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://www.robinmail.org/api/v1/mailer
```

**_Headers:_**

| Key          | Value            | Description |
| ------------ | ---------------- | ----------- |
| Content-Type | application/json |             |

**_Body:_**

```js
{
	"name": "Robin",
	"email": "abc@123.co.uk",
	"message": "Hello! This message was sent using Robin Mailer from my personal portfolio site charliemccabe.co.uk",
	"origin": "charliemccabe.co.uk"
}
```

---

[Back to top](#robinmail)

> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-01-04 16:45:38 by [docgen](https://github.com/thedevsaddam/docgen)
