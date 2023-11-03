
# 🧩 Structural Design

```bash
root
│
├── src
│   │
│   ├── components
│   │     │
│   │     ├── token
│   │     │     ├── token.model.ts
│   │     │     ├── token.controller.ts
│   │     │     ├── token.router.ts
│   │     │     ├── token.type.d.ts
│   │     │     └── index.ts
│   │     │
│   │     ├── upload
│   │     │     ├── upload.model.ts
│   │     │     ├── upload.validation.ts
│   │     │     ├── upload.type.d.ts
│   │     │     └── index.ts
│   │     │
│   │     ├── customer
│   │     │     ├── customer.model.ts
│   │     │     ├── customer.controller.ts
│   │     │     ├── customer.filters.ts
│   │     │     ├── customer.router.ts
│   │     │     ├── customer.validation.ts
│   │     │     ├── customer.type.d.ts
│   │     │     └── index.ts
│   │     │
│   │     ├── payment
│   │     │     ├── payment.model.ts
│   │     │     ├── payment.controller.ts
│   │     │     ├── payment.filters.ts
│   │     │     ├── payment.router.ts
│   │     │     ├── payment.validation.ts
│   │     │     ├── payment.type.d.ts
│   │     │     └── index.ts
│   │     │
│   │     ├── rating
│   │     │     ├── rating.model.ts
│   │     │     ├── rating.controller.ts
│   │     │     ├── rating.filters.ts
│   │     │     ├── rating.router.ts
│   │     │     ├── rating.validation.ts
│   │     │     ├── rating.type.d.ts
│   │     │     └── index.ts
│   │     │
│   │     ├── follow
│   │     │     ├── follow.model.ts
│   │     │     ├── follow.controller.ts
│   │     │     ├── follow.filters.ts
│   │     │     ├── follow.router.ts
│   │     │     ├── follow.validation.ts
│   │     │     ├── follow.type.d.ts
│   │     │     └── index.ts
│   │     │
│   │     ├── contact-us
│   │     │     ├── contact-us.model.ts
│   │     │     ├── contact-us.controller.ts
│   │     │     ├── contact-us.filters.ts
│   │     │     ├── contact-us.router.ts
│   │     │     ├── contact-us.validation.ts
│   │     │     ├── contact-us.type.d.ts
│   │     │     └── index.ts
│   │     │
│   │     ├── consultant
│   │     │     ├── consultant.model.ts
│   │     │     ├── consultant.controller.ts
│   │     │     ├── consultant.filters.ts
│   │     │     ├── consultant.router.ts
│   │     │     ├── consultant.validation.ts
│   │     │     ├── consultant.type.d.ts
│   │     │     └── index.ts
│   │     │
│   │     ├── coach
│   │     │     ├── coach-plans
│   │     │     │       ├── plan.model.ts
│   │     │     │       ├── plan.controller.ts
│   │     │     │       ├── plan.filters.ts
│   │     │     │       ├── plan.router.ts
│   │     │     │       ├── plan.validation.ts
│   │     │     │       ├── plan.type.d.ts
│   │     │     │       └── index.ts
│   │     │     │
│   │     │     ├── coach.model.ts
│   │     │     ├── coach.controller.ts
│   │     │     ├── coach.filters.ts
│   │     │     ├── coach.router.ts
│   │     │     ├── coach.validation.ts
│   │     │     ├── coach.type.d.ts
│   │     │     └── index.ts
│   │     │
│   │     └── index.ts
│   │
│   ├── middlewares
│   │     ├── auth.ts
│   │     ├── corsOption.ts
│   │     ├── rateLimiter.ts
│   │     ├── multer.storage.ts
│   │     ├── middlewares.type.d.ts
│   │     └── index.ts
│   │
│   ├── helpers
│   │     ├── email.ts
│   │     ├── token.ts
│   │     ├── hashing.ts
│   │     ├── logger.ts
│   │     ├── mobile.ts
│   │     ├── helpers.type.d.ts
│   │     └── index.ts
│   │
│   ├── utils
│   │     ├── global.utils.ts
│   │     ├── array.utils.ts
│   │     ├── string.utils.ts
│   │     ├── number.utils.ts
│   │     ├── date.utils.ts
│   │     ├── file.utils.ts
│   │     ├── path.utils.ts
│   │     ├── validate.utils.ts
│   │     ├── wait.ts
│   │     ├── regex-validation.ts
│   │     ├── customErrorHandler.ts
│   │     ├── axiosInstance.ts
│   │     ├── utils.type.d.ts
│   │     └── index.ts
│   │
│   ├── services
│   │     ├── cloudinary
│   │     │     └── index.ts
│   │     ├── nodemailer
│   │     │     └── index.ts
│   │     ├── payment-gateway
│   │     │     ├── razorpay.ts
│   │     │     ├── stripe.ts
│   │     │     ├── payment-gateway.type.d.ts
│   │     │     └── index.ts
│   │     ├── twilio
│   │     │     └── index.ts
│   │     └── index.ts
│   │
│   ├── routes
│   │     ├── router.ts
│   │     ├── endpoints.ts
│   │     └── index.ts
│   │
│   ├── types
│   │     ├── commons.ts
│   │     ├── enums.ts
│   │     └── index.ts
│   │
│   ├── validations
│   │     ├── commons.ts
│   │     ├── headers.ts
│   │     ├── validations.type.ts
│   │     └── index.ts
│   │
│   ├── docs
│   │     ├── swagger.css
│   │     └── swagger.json
│   │
│   ├── constants
│   │     ├── auth.ts
│   │     ├── db.ts
│   │     ├── commons.ts
│   │     ├── email.ts
│   │     ├── contact.ts
│   │     └── index.ts
│   │
│   ├── configs
│   │      └── index.ts
│   │
│   ├── templates
│   │     ├── email-verification.ts
│   │     ├── otp-verification.ts
│   │     ├── referral-code-verification.ts
│   │     ├── reset-password.ts
│   │     └── index.ts
│   │
│   ├── db
│   │    ├── db.type.d.ts
│   │    └── index.ts
│   │
│   └── server.ts
│
│
├── .env
├── .env.production
├── .env.example
│
├── .husky
│     ├── post-merge
│     └── pre-commit
│
├── .github
│     └── workflows
│           └── index.ts
├── logs
│     └── error.log
│
├── uploads
│
├── public
│     └── docs-images
│            ├── image1.png
│            ├── image2.png
│            ├── image3.png
│            └── image4.png
│
├── node_modules
├── package-lock.json/yarn.lock/pnpm-lock.yaml
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .dockerignore
├── Dockerfile  # for docker
├── docker-compose.yml # for handle multiple docker container
├── global.d.ts
├── LICENCE
├── SECURITY.md
├── package.json
├── tsconfig.json
├── README.md
└── ...etc.

```

# 🧿 Here's a brief explanation of each directory/file:

> `src` : This is where your main source code resides.
>
> `docs` : Contains the All Apis-Documentation.
>
> `public` : Contains the public files, etc...
>
> `uploads` : Contains the All Files,Image, Video and profile, etc...
>
> `templates` : Contains the All Apis-Templates related to email/conatct/more.. .
>
> `components` : Contains the components/modules.
>
> `controllers` : Contains the controllers responsible for handling route logic.
>
> `models` : Houses the data models (e.g., Mongoose schemas) for your application.
>
> `middlewares` : Holds the middlewares.
>
> `routes` : Holds the route definitions.
>
> `helpers` : Contains helpers functions or helper modules.
>
> `services` : Contains services functions or services modules.
>
> `utils` : Contains utility functions or utils modules.
>
> `constants` : constant/static files for your application.
>
> `configs` : Configuration files for your application.
>
> `db` : Database connection setup.
>
> `env` : Environment files for Protecting All Secrets.
>
> `tests` : This is where you can put your tests.
>
> `types` : All Global Types for TypeScript.
>
> `validations` : Global Validations.
>
> `server.ts` : The entry point of your application where you set up your Express app.
>
> `node_modules` : Contains the installed Node.js modules (created automatically by npm/yarn/pnpm).
>
> `.gitignore` : Specifies files and directories that should be ignored by version control.
>
> `.eslintignore` : Specifies files and directories that should be ignored by eslint
>
> `.eslintrc.json` : Specifies files and directories that should be Contains all eslint related configuration
>
> `.prettierignore` : Specifies files and directories that should be ignored by prettier
>
> `.prettierrc` : Specifies files and directories that should be Contains all prettier related configuration
>
> `.dockerignore` : Specifies files and directories that should be ignored by docker
>
> `Dockerfile` : Specifies files for Docker configuration
>
> `package.json` : The file that lists your project's dependencies and scripts.
>
> `global.d.ts` : TypeScript Global configuration.
>
> `tsconfig.json` : TypeScript configuration file.
>
> `LICENCE` : MIT LICENCE.
>
> `SECURITY.md` : Report for bugs/security/more related.
>
> `README.md` : A markdown file that provides an overview of your project and its structure.

---