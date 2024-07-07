import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image','createdAt','updatedAt']);

export const AccountScalarFieldEnumSchema = z.enum(['userId','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state','createdAt','updatedAt']);

export const SessionScalarFieldEnumSchema = z.enum(['sessionToken','userId','expires','createdAt','updatedAt']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['identifier','token','expires']);

export const AuthenticatorScalarFieldEnumSchema = z.enum(['credentialID','userId','providerAccountId','credentialPublicKey','counter','credentialDeviceType','credentialBackedUp','transports']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','order']);

export const LinkScalarFieldEnumSchema = z.enum(['id','name','url','categoryId','order']);

export const LinkClickScalarFieldEnumSchema = z.enum(['id','linkId','datetime']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().int().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// AUTHENTICATOR SCHEMA
/////////////////////////////////////////

export const AuthenticatorSchema = z.object({
  credentialID: z.string(),
  userId: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().nullable(),
})

export type Authenticator = z.infer<typeof AuthenticatorSchema>

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  order: z.number().int(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// LINK SCHEMA
/////////////////////////////////////////

export const LinkSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  url: z.string(),
  categoryId: z.string(),
  order: z.number().int(),
})

export type Link = z.infer<typeof LinkSchema>

/////////////////////////////////////////
// LINK CLICK SCHEMA
/////////////////////////////////////////

export const LinkClickSchema = z.object({
  id: z.string().uuid(),
  linkId: z.string(),
  datetime: z.coerce.date(),
})

export type LinkClick = z.infer<typeof LinkClickSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  Authenticator: z.union([z.boolean(),z.lazy(() => AuthenticatorFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
  Authenticator: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  Authenticator: z.union([z.boolean(),z.lazy(() => AuthenticatorFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

// AUTHENTICATOR
//------------------------------------------------------

export const AuthenticatorIncludeSchema: z.ZodType<Prisma.AuthenticatorInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AuthenticatorArgsSchema: z.ZodType<Prisma.AuthenticatorDefaultArgs> = z.object({
  select: z.lazy(() => AuthenticatorSelectSchema).optional(),
  include: z.lazy(() => AuthenticatorIncludeSchema).optional(),
}).strict();

export const AuthenticatorSelectSchema: z.ZodType<Prisma.AuthenticatorSelect> = z.object({
  credentialID: z.boolean().optional(),
  userId: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  credentialPublicKey: z.boolean().optional(),
  counter: z.boolean().optional(),
  credentialDeviceType: z.boolean().optional(),
  credentialBackedUp: z.boolean().optional(),
  transports: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// CATEGORY
//------------------------------------------------------

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
  links: z.union([z.boolean(),z.lazy(() => LinkFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CategoryArgsSchema: z.ZodType<Prisma.CategoryDefaultArgs> = z.object({
  select: z.lazy(() => CategorySelectSchema).optional(),
  include: z.lazy(() => CategoryIncludeSchema).optional(),
}).strict();

export const CategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  links: z.boolean().optional(),
}).strict();

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  order: z.boolean().optional(),
  links: z.union([z.boolean(),z.lazy(() => LinkFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// LINK
//------------------------------------------------------

export const LinkIncludeSchema: z.ZodType<Prisma.LinkInclude> = z.object({
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  clicks: z.union([z.boolean(),z.lazy(() => LinkClickFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LinkCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LinkArgsSchema: z.ZodType<Prisma.LinkDefaultArgs> = z.object({
  select: z.lazy(() => LinkSelectSchema).optional(),
  include: z.lazy(() => LinkIncludeSchema).optional(),
}).strict();

export const LinkCountOutputTypeArgsSchema: z.ZodType<Prisma.LinkCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LinkCountOutputTypeSelectSchema).nullish(),
}).strict();

export const LinkCountOutputTypeSelectSchema: z.ZodType<Prisma.LinkCountOutputTypeSelect> = z.object({
  clicks: z.boolean().optional(),
}).strict();

export const LinkSelectSchema: z.ZodType<Prisma.LinkSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  url: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  order: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  clicks: z.union([z.boolean(),z.lazy(() => LinkClickFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LinkCountOutputTypeArgsSchema)]).optional(),
}).strict()

// LINK CLICK
//------------------------------------------------------

export const LinkClickIncludeSchema: z.ZodType<Prisma.LinkClickInclude> = z.object({
  link: z.union([z.boolean(),z.lazy(() => LinkArgsSchema)]).optional(),
}).strict()

export const LinkClickArgsSchema: z.ZodType<Prisma.LinkClickDefaultArgs> = z.object({
  select: z.lazy(() => LinkClickSelectSchema).optional(),
  include: z.lazy(() => LinkClickIncludeSchema).optional(),
}).strict();

export const LinkClickSelectSchema: z.ZodType<Prisma.LinkClickSelect> = z.object({
  id: z.boolean().optional(),
  linkId: z.boolean().optional(),
  datetime: z.boolean().optional(),
  link: z.union([z.boolean(),z.lazy(() => LinkArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.object({
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema)
})
.and(z.object({
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.object({
  sessionToken: z.string()
})
.and(z.object({
  sessionToken: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.object({
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema)
})
.and(z.object({
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AuthenticatorWhereInputSchema: z.ZodType<Prisma.AuthenticatorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthenticatorWhereInputSchema),z.lazy(() => AuthenticatorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthenticatorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthenticatorWhereInputSchema),z.lazy(() => AuthenticatorWhereInputSchema).array() ]).optional(),
  credentialID: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialPublicKey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  counter: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  credentialDeviceType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialBackedUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  transports: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AuthenticatorOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthenticatorOrderByWithRelationInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AuthenticatorWhereUniqueInputSchema: z.ZodType<Prisma.AuthenticatorWhereUniqueInput> = z.union([
  z.object({
    userId_credentialID: z.lazy(() => AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema),
    credentialID: z.string()
  }),
  z.object({
    userId_credentialID: z.lazy(() => AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema),
  }),
  z.object({
    credentialID: z.string(),
  }),
])
.and(z.object({
  credentialID: z.string().optional(),
  userId_credentialID: z.lazy(() => AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AuthenticatorWhereInputSchema),z.lazy(() => AuthenticatorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthenticatorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthenticatorWhereInputSchema),z.lazy(() => AuthenticatorWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialPublicKey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  counter: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  credentialDeviceType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialBackedUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  transports: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AuthenticatorOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthenticatorOrderByWithAggregationInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AuthenticatorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AuthenticatorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuthenticatorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuthenticatorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AuthenticatorSumOrderByAggregateInputSchema).optional()
}).strict();

export const AuthenticatorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthenticatorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  credentialID: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  credentialPublicKey: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  counter: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  credentialDeviceType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  credentialBackedUp: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  transports: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CategoryWhereInputSchema: z.ZodType<Prisma.CategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  links: z.lazy(() => LinkListRelationFilterSchema).optional()
}).strict();

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  links: z.lazy(() => LinkOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  links: z.lazy(() => LinkListRelationFilterSchema).optional()
}).strict());

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CategorySumOrderByAggregateInputSchema).optional()
}).strict();

export const CategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const LinkWhereInputSchema: z.ZodType<Prisma.LinkWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LinkWhereInputSchema),z.lazy(() => LinkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkWhereInputSchema),z.lazy(() => LinkWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  clicks: z.lazy(() => LinkClickListRelationFilterSchema).optional()
}).strict();

export const LinkOrderByWithRelationInputSchema: z.ZodType<Prisma.LinkOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  clicks: z.lazy(() => LinkClickOrderByRelationAggregateInputSchema).optional()
}).strict();

export const LinkWhereUniqueInputSchema: z.ZodType<Prisma.LinkWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => LinkWhereInputSchema),z.lazy(() => LinkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkWhereInputSchema),z.lazy(() => LinkWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  category: z.union([ z.lazy(() => CategoryRelationFilterSchema),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  clicks: z.lazy(() => LinkClickListRelationFilterSchema).optional()
}).strict());

export const LinkOrderByWithAggregationInputSchema: z.ZodType<Prisma.LinkOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LinkCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LinkAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LinkMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LinkMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LinkSumOrderByAggregateInputSchema).optional()
}).strict();

export const LinkScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LinkScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LinkScalarWhereWithAggregatesInputSchema),z.lazy(() => LinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkScalarWhereWithAggregatesInputSchema),z.lazy(() => LinkScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const LinkClickWhereInputSchema: z.ZodType<Prisma.LinkClickWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LinkClickWhereInputSchema),z.lazy(() => LinkClickWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkClickWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkClickWhereInputSchema),z.lazy(() => LinkClickWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  linkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  datetime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  link: z.union([ z.lazy(() => LinkRelationFilterSchema),z.lazy(() => LinkWhereInputSchema) ]).optional(),
}).strict();

export const LinkClickOrderByWithRelationInputSchema: z.ZodType<Prisma.LinkClickOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  datetime: z.lazy(() => SortOrderSchema).optional(),
  link: z.lazy(() => LinkOrderByWithRelationInputSchema).optional()
}).strict();

export const LinkClickWhereUniqueInputSchema: z.ZodType<Prisma.LinkClickWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => LinkClickWhereInputSchema),z.lazy(() => LinkClickWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkClickWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkClickWhereInputSchema),z.lazy(() => LinkClickWhereInputSchema).array() ]).optional(),
  linkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  datetime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  link: z.union([ z.lazy(() => LinkRelationFilterSchema),z.lazy(() => LinkWhereInputSchema) ]).optional(),
}).strict());

export const LinkClickOrderByWithAggregationInputSchema: z.ZodType<Prisma.LinkClickOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  datetime: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LinkClickCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LinkClickMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LinkClickMinOrderByAggregateInputSchema).optional()
}).strict();

export const LinkClickScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LinkClickScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LinkClickScalarWhereWithAggregatesInputSchema),z.lazy(() => LinkClickScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkClickScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkClickScalarWhereWithAggregatesInputSchema),z.lazy(() => LinkClickScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  linkId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  datetime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthenticatorCreateInputSchema: z.ZodType<Prisma.AuthenticatorCreateInput> = z.object({
  credentialID: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAuthenticatorInputSchema)
}).strict();

export const AuthenticatorUncheckedCreateInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedCreateInput> = z.object({
  credentialID: z.string(),
  userId: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AuthenticatorUpdateInputSchema: z.ZodType<Prisma.AuthenticatorUpdateInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAuthenticatorNestedInputSchema).optional()
}).strict();

export const AuthenticatorUncheckedUpdateInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthenticatorCreateManyInputSchema: z.ZodType<Prisma.AuthenticatorCreateManyInput> = z.object({
  credentialID: z.string(),
  userId: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AuthenticatorUpdateManyMutationInputSchema: z.ZodType<Prisma.AuthenticatorUpdateManyMutationInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthenticatorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateManyInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  order: z.number().int().optional(),
  links: z.lazy(() => LinkCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  order: z.number().int().optional(),
  links: z.lazy(() => LinkUncheckedCreateNestedManyWithoutCategoryInputSchema).optional()
}).strict();

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  links: z.lazy(() => LinkUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  links: z.lazy(() => LinkUncheckedUpdateManyWithoutCategoryNestedInputSchema).optional()
}).strict();

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  order: z.number().int().optional()
}).strict();

export const CategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoryUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LinkCreateInputSchema: z.ZodType<Prisma.LinkCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  url: z.string(),
  order: z.number().int().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutLinksInputSchema),
  clicks: z.lazy(() => LinkClickCreateNestedManyWithoutLinkInputSchema).optional()
}).strict();

export const LinkUncheckedCreateInputSchema: z.ZodType<Prisma.LinkUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  url: z.string(),
  categoryId: z.string(),
  order: z.number().int().optional(),
  clicks: z.lazy(() => LinkClickUncheckedCreateNestedManyWithoutLinkInputSchema).optional()
}).strict();

export const LinkUpdateInputSchema: z.ZodType<Prisma.LinkUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutLinksNestedInputSchema).optional(),
  clicks: z.lazy(() => LinkClickUpdateManyWithoutLinkNestedInputSchema).optional()
}).strict();

export const LinkUncheckedUpdateInputSchema: z.ZodType<Prisma.LinkUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clicks: z.lazy(() => LinkClickUncheckedUpdateManyWithoutLinkNestedInputSchema).optional()
}).strict();

export const LinkCreateManyInputSchema: z.ZodType<Prisma.LinkCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  url: z.string(),
  categoryId: z.string(),
  order: z.number().int().optional()
}).strict();

export const LinkUpdateManyMutationInputSchema: z.ZodType<Prisma.LinkUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LinkUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LinkUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LinkClickCreateInputSchema: z.ZodType<Prisma.LinkClickCreateInput> = z.object({
  id: z.string().uuid().optional(),
  datetime: z.coerce.date().optional(),
  link: z.lazy(() => LinkCreateNestedOneWithoutClicksInputSchema)
}).strict();

export const LinkClickUncheckedCreateInputSchema: z.ZodType<Prisma.LinkClickUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  linkId: z.string(),
  datetime: z.coerce.date().optional()
}).strict();

export const LinkClickUpdateInputSchema: z.ZodType<Prisma.LinkClickUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  datetime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  link: z.lazy(() => LinkUpdateOneRequiredWithoutClicksNestedInputSchema).optional()
}).strict();

export const LinkClickUncheckedUpdateInputSchema: z.ZodType<Prisma.LinkClickUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  linkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  datetime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LinkClickCreateManyInputSchema: z.ZodType<Prisma.LinkClickCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  linkId: z.string(),
  datetime: z.coerce.date().optional()
}).strict();

export const LinkClickUpdateManyMutationInputSchema: z.ZodType<Prisma.LinkClickUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  datetime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LinkClickUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LinkClickUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  linkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  datetime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const AuthenticatorListRelationFilterSchema: z.ZodType<Prisma.AuthenticatorListRelationFilter> = z.object({
  every: z.lazy(() => AuthenticatorWhereInputSchema).optional(),
  some: z.lazy(() => AuthenticatorWhereInputSchema).optional(),
  none: z.lazy(() => AuthenticatorWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AuthenticatorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema: z.ZodType<Prisma.AuthenticatorUserIdCredentialIDCompoundUniqueInput> = z.object({
  userId: z.string(),
  credentialID: z.string()
}).strict();

export const AuthenticatorCountOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorCountOrderByAggregateInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorAvgOrderByAggregateInput> = z.object({
  counter: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorMaxOrderByAggregateInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorMinOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorMinOrderByAggregateInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorSumOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorSumOrderByAggregateInput> = z.object({
  counter: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const LinkListRelationFilterSchema: z.ZodType<Prisma.LinkListRelationFilter> = z.object({
  every: z.lazy(() => LinkWhereInputSchema).optional(),
  some: z.lazy(() => LinkWhereInputSchema).optional(),
  none: z.lazy(() => LinkWhereInputSchema).optional()
}).strict();

export const LinkOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LinkOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryAvgOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.CategorySumOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryRelationFilterSchema: z.ZodType<Prisma.CategoryRelationFilter> = z.object({
  is: z.lazy(() => CategoryWhereInputSchema).optional(),
  isNot: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const LinkClickListRelationFilterSchema: z.ZodType<Prisma.LinkClickListRelationFilter> = z.object({
  every: z.lazy(() => LinkClickWhereInputSchema).optional(),
  some: z.lazy(() => LinkClickWhereInputSchema).optional(),
  none: z.lazy(() => LinkClickWhereInputSchema).optional()
}).strict();

export const LinkClickOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LinkClickOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LinkCountOrderByAggregateInputSchema: z.ZodType<Prisma.LinkCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LinkAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LinkAvgOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LinkMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LinkMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LinkMinOrderByAggregateInputSchema: z.ZodType<Prisma.LinkMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LinkSumOrderByAggregateInputSchema: z.ZodType<Prisma.LinkSumOrderByAggregateInput> = z.object({
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LinkRelationFilterSchema: z.ZodType<Prisma.LinkRelationFilter> = z.object({
  is: z.lazy(() => LinkWhereInputSchema).optional(),
  isNot: z.lazy(() => LinkWhereInputSchema).optional()
}).strict();

export const LinkClickCountOrderByAggregateInputSchema: z.ZodType<Prisma.LinkClickCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  datetime: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LinkClickMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LinkClickMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  datetime: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LinkClickMinOrderByAggregateInputSchema: z.ZodType<Prisma.LinkClickMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  datetime: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AuthenticatorCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AuthenticatorUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AuthenticatorUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthenticatorScalarWhereInputSchema),z.lazy(() => AuthenticatorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthenticatorScalarWhereInputSchema),z.lazy(() => AuthenticatorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAuthenticatorInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthenticatorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAuthenticatorNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAuthenticatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthenticatorInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAuthenticatorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAuthenticatorInputSchema),z.lazy(() => UserUpdateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthenticatorInputSchema) ]).optional(),
}).strict();

export const LinkCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.LinkCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutCategoryInputSchema),z.lazy(() => LinkCreateWithoutCategoryInputSchema).array(),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => LinkCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LinkUncheckedCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.LinkUncheckedCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutCategoryInputSchema),z.lazy(() => LinkCreateWithoutCategoryInputSchema).array(),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => LinkCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LinkUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.LinkUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutCategoryInputSchema),z.lazy(() => LinkCreateWithoutCategoryInputSchema).array(),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => LinkCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LinkUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => LinkUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LinkUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => LinkUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LinkUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => LinkUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LinkScalarWhereInputSchema),z.lazy(() => LinkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LinkUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutCategoryInputSchema),z.lazy(() => LinkCreateWithoutCategoryInputSchema).array(),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => LinkCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LinkUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => LinkUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LinkUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => LinkUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LinkUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => LinkUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LinkScalarWhereInputSchema),z.lazy(() => LinkScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryCreateNestedOneWithoutLinksInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutLinksInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutLinksInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutLinksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutLinksInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional()
}).strict();

export const LinkClickCreateNestedManyWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickCreateNestedManyWithoutLinkInput> = z.object({
  create: z.union([ z.lazy(() => LinkClickCreateWithoutLinkInputSchema),z.lazy(() => LinkClickCreateWithoutLinkInputSchema).array(),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkClickCreateOrConnectWithoutLinkInputSchema),z.lazy(() => LinkClickCreateOrConnectWithoutLinkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkClickCreateManyLinkInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const LinkClickUncheckedCreateNestedManyWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickUncheckedCreateNestedManyWithoutLinkInput> = z.object({
  create: z.union([ z.lazy(() => LinkClickCreateWithoutLinkInputSchema),z.lazy(() => LinkClickCreateWithoutLinkInputSchema).array(),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkClickCreateOrConnectWithoutLinkInputSchema),z.lazy(() => LinkClickCreateOrConnectWithoutLinkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkClickCreateManyLinkInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryUpdateOneRequiredWithoutLinksNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutLinksNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutLinksInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutLinksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutLinksInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutLinksInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutLinksInputSchema),z.lazy(() => CategoryUpdateWithoutLinksInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutLinksInputSchema) ]).optional(),
}).strict();

export const LinkClickUpdateManyWithoutLinkNestedInputSchema: z.ZodType<Prisma.LinkClickUpdateManyWithoutLinkNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkClickCreateWithoutLinkInputSchema),z.lazy(() => LinkClickCreateWithoutLinkInputSchema).array(),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkClickCreateOrConnectWithoutLinkInputSchema),z.lazy(() => LinkClickCreateOrConnectWithoutLinkInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LinkClickUpsertWithWhereUniqueWithoutLinkInputSchema),z.lazy(() => LinkClickUpsertWithWhereUniqueWithoutLinkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkClickCreateManyLinkInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LinkClickUpdateWithWhereUniqueWithoutLinkInputSchema),z.lazy(() => LinkClickUpdateWithWhereUniqueWithoutLinkInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LinkClickUpdateManyWithWhereWithoutLinkInputSchema),z.lazy(() => LinkClickUpdateManyWithWhereWithoutLinkInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LinkClickScalarWhereInputSchema),z.lazy(() => LinkClickScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LinkClickUncheckedUpdateManyWithoutLinkNestedInputSchema: z.ZodType<Prisma.LinkClickUncheckedUpdateManyWithoutLinkNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkClickCreateWithoutLinkInputSchema),z.lazy(() => LinkClickCreateWithoutLinkInputSchema).array(),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkClickCreateOrConnectWithoutLinkInputSchema),z.lazy(() => LinkClickCreateOrConnectWithoutLinkInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LinkClickUpsertWithWhereUniqueWithoutLinkInputSchema),z.lazy(() => LinkClickUpsertWithWhereUniqueWithoutLinkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkClickCreateManyLinkInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LinkClickWhereUniqueInputSchema),z.lazy(() => LinkClickWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LinkClickUpdateWithWhereUniqueWithoutLinkInputSchema),z.lazy(() => LinkClickUpdateWithWhereUniqueWithoutLinkInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LinkClickUpdateManyWithWhereWithoutLinkInputSchema),z.lazy(() => LinkClickUpdateManyWithWhereWithoutLinkInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LinkClickScalarWhereInputSchema),z.lazy(() => LinkClickScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const LinkCreateNestedOneWithoutClicksInputSchema: z.ZodType<Prisma.LinkCreateNestedOneWithoutClicksInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutClicksInputSchema),z.lazy(() => LinkUncheckedCreateWithoutClicksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutClicksInputSchema).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional()
}).strict();

export const LinkUpdateOneRequiredWithoutClicksNestedInputSchema: z.ZodType<Prisma.LinkUpdateOneRequiredWithoutClicksNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutClicksInputSchema),z.lazy(() => LinkUncheckedCreateWithoutClicksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutClicksInputSchema).optional(),
  upsert: z.lazy(() => LinkUpsertWithoutClicksInputSchema).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LinkUpdateToOneWithWhereWithoutClicksInputSchema),z.lazy(() => LinkUpdateWithoutClicksInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutClicksInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AuthenticatorCreateWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateWithoutUserInput> = z.object({
  credentialID: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AuthenticatorUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedCreateWithoutUserInput> = z.object({
  credentialID: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AuthenticatorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AuthenticatorCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AuthenticatorCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuthenticatorCreateManyUserInputSchema),z.lazy(() => AuthenticatorCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuthenticatorUpdateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AuthenticatorUpdateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AuthenticatorUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuthenticatorUpdateManyMutationInputSchema),z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AuthenticatorScalarWhereInputSchema: z.ZodType<Prisma.AuthenticatorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthenticatorScalarWhereInputSchema),z.lazy(() => AuthenticatorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthenticatorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthenticatorScalarWhereInputSchema),z.lazy(() => AuthenticatorScalarWhereInputSchema).array() ]).optional(),
  credentialID: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialPublicKey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  counter: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  credentialDeviceType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialBackedUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  transports: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserCreateWithoutAuthenticatorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAuthenticatorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAuthenticatorInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]),
}).strict();

export const UserUpsertWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUpsertWithoutAuthenticatorInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthenticatorInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAuthenticatorInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthenticatorInputSchema) ]),
}).strict();

export const UserUpdateWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUpdateWithoutAuthenticatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAuthenticatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const LinkCreateWithoutCategoryInputSchema: z.ZodType<Prisma.LinkCreateWithoutCategoryInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  url: z.string(),
  order: z.number().int().optional(),
  clicks: z.lazy(() => LinkClickCreateNestedManyWithoutLinkInputSchema).optional()
}).strict();

export const LinkUncheckedCreateWithoutCategoryInputSchema: z.ZodType<Prisma.LinkUncheckedCreateWithoutCategoryInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  url: z.string(),
  order: z.number().int().optional(),
  clicks: z.lazy(() => LinkClickUncheckedCreateNestedManyWithoutLinkInputSchema).optional()
}).strict();

export const LinkCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutCategoryInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LinkCreateWithoutCategoryInputSchema),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const LinkCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.LinkCreateManyCategoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LinkCreateManyCategoryInputSchema),z.lazy(() => LinkCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const LinkUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LinkUpdateWithoutCategoryInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => LinkCreateWithoutCategoryInputSchema),z.lazy(() => LinkUncheckedCreateWithoutCategoryInputSchema) ]),
}).strict();

export const LinkUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutCategoryInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LinkUpdateWithoutCategoryInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutCategoryInputSchema) ]),
}).strict();

export const LinkUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.LinkUpdateManyWithWhereWithoutCategoryInput> = z.object({
  where: z.lazy(() => LinkScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LinkUpdateManyMutationInputSchema),z.lazy(() => LinkUncheckedUpdateManyWithoutCategoryInputSchema) ]),
}).strict();

export const LinkScalarWhereInputSchema: z.ZodType<Prisma.LinkScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LinkScalarWhereInputSchema),z.lazy(() => LinkScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkScalarWhereInputSchema),z.lazy(() => LinkScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const CategoryCreateWithoutLinksInputSchema: z.ZodType<Prisma.CategoryCreateWithoutLinksInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  order: z.number().int().optional()
}).strict();

export const CategoryUncheckedCreateWithoutLinksInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutLinksInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  order: z.number().int().optional()
}).strict();

export const CategoryCreateOrConnectWithoutLinksInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutLinksInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutLinksInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutLinksInputSchema) ]),
}).strict();

export const LinkClickCreateWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickCreateWithoutLinkInput> = z.object({
  id: z.string().uuid().optional(),
  datetime: z.coerce.date().optional()
}).strict();

export const LinkClickUncheckedCreateWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickUncheckedCreateWithoutLinkInput> = z.object({
  id: z.string().uuid().optional(),
  datetime: z.coerce.date().optional()
}).strict();

export const LinkClickCreateOrConnectWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickCreateOrConnectWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkClickWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LinkClickCreateWithoutLinkInputSchema),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema) ]),
}).strict();

export const LinkClickCreateManyLinkInputEnvelopeSchema: z.ZodType<Prisma.LinkClickCreateManyLinkInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => LinkClickCreateManyLinkInputSchema),z.lazy(() => LinkClickCreateManyLinkInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CategoryUpsertWithoutLinksInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutLinksInput> = z.object({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutLinksInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutLinksInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutLinksInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutLinksInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const CategoryUpdateToOneWithWhereWithoutLinksInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutLinksInput> = z.object({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutLinksInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutLinksInputSchema) ]),
}).strict();

export const CategoryUpdateWithoutLinksInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutLinksInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateWithoutLinksInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutLinksInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LinkClickUpsertWithWhereUniqueWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickUpsertWithWhereUniqueWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkClickWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LinkClickUpdateWithoutLinkInputSchema),z.lazy(() => LinkClickUncheckedUpdateWithoutLinkInputSchema) ]),
  create: z.union([ z.lazy(() => LinkClickCreateWithoutLinkInputSchema),z.lazy(() => LinkClickUncheckedCreateWithoutLinkInputSchema) ]),
}).strict();

export const LinkClickUpdateWithWhereUniqueWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickUpdateWithWhereUniqueWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkClickWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LinkClickUpdateWithoutLinkInputSchema),z.lazy(() => LinkClickUncheckedUpdateWithoutLinkInputSchema) ]),
}).strict();

export const LinkClickUpdateManyWithWhereWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickUpdateManyWithWhereWithoutLinkInput> = z.object({
  where: z.lazy(() => LinkClickScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LinkClickUpdateManyMutationInputSchema),z.lazy(() => LinkClickUncheckedUpdateManyWithoutLinkInputSchema) ]),
}).strict();

export const LinkClickScalarWhereInputSchema: z.ZodType<Prisma.LinkClickScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LinkClickScalarWhereInputSchema),z.lazy(() => LinkClickScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LinkClickScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LinkClickScalarWhereInputSchema),z.lazy(() => LinkClickScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  linkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  datetime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const LinkCreateWithoutClicksInputSchema: z.ZodType<Prisma.LinkCreateWithoutClicksInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  url: z.string(),
  order: z.number().int().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutLinksInputSchema)
}).strict();

export const LinkUncheckedCreateWithoutClicksInputSchema: z.ZodType<Prisma.LinkUncheckedCreateWithoutClicksInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  url: z.string(),
  categoryId: z.string(),
  order: z.number().int().optional()
}).strict();

export const LinkCreateOrConnectWithoutClicksInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutClicksInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LinkCreateWithoutClicksInputSchema),z.lazy(() => LinkUncheckedCreateWithoutClicksInputSchema) ]),
}).strict();

export const LinkUpsertWithoutClicksInputSchema: z.ZodType<Prisma.LinkUpsertWithoutClicksInput> = z.object({
  update: z.union([ z.lazy(() => LinkUpdateWithoutClicksInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutClicksInputSchema) ]),
  create: z.union([ z.lazy(() => LinkCreateWithoutClicksInputSchema),z.lazy(() => LinkUncheckedCreateWithoutClicksInputSchema) ]),
  where: z.lazy(() => LinkWhereInputSchema).optional()
}).strict();

export const LinkUpdateToOneWithWhereWithoutClicksInputSchema: z.ZodType<Prisma.LinkUpdateToOneWithWhereWithoutClicksInput> = z.object({
  where: z.lazy(() => LinkWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LinkUpdateWithoutClicksInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutClicksInputSchema) ]),
}).strict();

export const LinkUpdateWithoutClicksInputSchema: z.ZodType<Prisma.LinkUpdateWithoutClicksInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutLinksNestedInputSchema).optional()
}).strict();

export const LinkUncheckedUpdateWithoutClicksInputSchema: z.ZodType<Prisma.LinkUncheckedUpdateWithoutClicksInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuthenticatorCreateManyUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateManyUserInput> = z.object({
  credentialID: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthenticatorUpdateWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpdateWithoutUserInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthenticatorUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateWithoutUserInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthenticatorUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateManyWithoutUserInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const LinkCreateManyCategoryInputSchema: z.ZodType<Prisma.LinkCreateManyCategoryInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  url: z.string(),
  order: z.number().int().optional()
}).strict();

export const LinkUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.LinkUpdateWithoutCategoryInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clicks: z.lazy(() => LinkClickUpdateManyWithoutLinkNestedInputSchema).optional()
}).strict();

export const LinkUncheckedUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.LinkUncheckedUpdateWithoutCategoryInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clicks: z.lazy(() => LinkClickUncheckedUpdateManyWithoutLinkNestedInputSchema).optional()
}).strict();

export const LinkUncheckedUpdateManyWithoutCategoryInputSchema: z.ZodType<Prisma.LinkUncheckedUpdateManyWithoutCategoryInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LinkClickCreateManyLinkInputSchema: z.ZodType<Prisma.LinkClickCreateManyLinkInput> = z.object({
  id: z.string().uuid().optional(),
  datetime: z.coerce.date().optional()
}).strict();

export const LinkClickUpdateWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickUpdateWithoutLinkInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  datetime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LinkClickUncheckedUpdateWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickUncheckedUpdateWithoutLinkInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  datetime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LinkClickUncheckedUpdateManyWithoutLinkInputSchema: z.ZodType<Prisma.LinkClickUncheckedUpdateManyWithoutLinkInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  datetime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const AuthenticatorFindFirstArgsSchema: z.ZodType<Prisma.AuthenticatorFindFirstArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthenticatorScalarFieldEnumSchema,AuthenticatorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AuthenticatorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuthenticatorFindFirstOrThrowArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthenticatorScalarFieldEnumSchema,AuthenticatorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AuthenticatorFindManyArgsSchema: z.ZodType<Prisma.AuthenticatorFindManyArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthenticatorScalarFieldEnumSchema,AuthenticatorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AuthenticatorAggregateArgsSchema: z.ZodType<Prisma.AuthenticatorAggregateArgs> = z.object({
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AuthenticatorGroupByArgsSchema: z.ZodType<Prisma.AuthenticatorGroupByArgs> = z.object({
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithAggregationInputSchema.array(),AuthenticatorOrderByWithAggregationInputSchema ]).optional(),
  by: AuthenticatorScalarFieldEnumSchema.array(),
  having: AuthenticatorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AuthenticatorFindUniqueArgsSchema: z.ZodType<Prisma.AuthenticatorFindUniqueArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereUniqueInputSchema,
}).strict() ;

export const AuthenticatorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuthenticatorFindUniqueOrThrowArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereUniqueInputSchema,
}).strict() ;

export const CategoryFindFirstArgsSchema: z.ZodType<Prisma.CategoryFindFirstArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindFirstOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryFindManyArgsSchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CategoryScalarFieldEnumSchema,CategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CategoryAggregateArgsSchema: z.ZodType<Prisma.CategoryAggregateArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CategoryGroupByArgsSchema: z.ZodType<Prisma.CategoryGroupByArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithAggregationInputSchema.array(),CategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CategoryScalarFieldEnumSchema.array(),
  having: CategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CategoryFindUniqueArgsSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindUniqueOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const LinkFindFirstArgsSchema: z.ZodType<Prisma.LinkFindFirstArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  where: LinkWhereInputSchema.optional(),
  orderBy: z.union([ LinkOrderByWithRelationInputSchema.array(),LinkOrderByWithRelationInputSchema ]).optional(),
  cursor: LinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LinkScalarFieldEnumSchema,LinkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LinkFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LinkFindFirstOrThrowArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  where: LinkWhereInputSchema.optional(),
  orderBy: z.union([ LinkOrderByWithRelationInputSchema.array(),LinkOrderByWithRelationInputSchema ]).optional(),
  cursor: LinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LinkScalarFieldEnumSchema,LinkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LinkFindManyArgsSchema: z.ZodType<Prisma.LinkFindManyArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  where: LinkWhereInputSchema.optional(),
  orderBy: z.union([ LinkOrderByWithRelationInputSchema.array(),LinkOrderByWithRelationInputSchema ]).optional(),
  cursor: LinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LinkScalarFieldEnumSchema,LinkScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LinkAggregateArgsSchema: z.ZodType<Prisma.LinkAggregateArgs> = z.object({
  where: LinkWhereInputSchema.optional(),
  orderBy: z.union([ LinkOrderByWithRelationInputSchema.array(),LinkOrderByWithRelationInputSchema ]).optional(),
  cursor: LinkWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LinkGroupByArgsSchema: z.ZodType<Prisma.LinkGroupByArgs> = z.object({
  where: LinkWhereInputSchema.optional(),
  orderBy: z.union([ LinkOrderByWithAggregationInputSchema.array(),LinkOrderByWithAggregationInputSchema ]).optional(),
  by: LinkScalarFieldEnumSchema.array(),
  having: LinkScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LinkFindUniqueArgsSchema: z.ZodType<Prisma.LinkFindUniqueArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  where: LinkWhereUniqueInputSchema,
}).strict() ;

export const LinkFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LinkFindUniqueOrThrowArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  where: LinkWhereUniqueInputSchema,
}).strict() ;

export const LinkClickFindFirstArgsSchema: z.ZodType<Prisma.LinkClickFindFirstArgs> = z.object({
  select: LinkClickSelectSchema.optional(),
  include: LinkClickIncludeSchema.optional(),
  where: LinkClickWhereInputSchema.optional(),
  orderBy: z.union([ LinkClickOrderByWithRelationInputSchema.array(),LinkClickOrderByWithRelationInputSchema ]).optional(),
  cursor: LinkClickWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LinkClickScalarFieldEnumSchema,LinkClickScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LinkClickFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LinkClickFindFirstOrThrowArgs> = z.object({
  select: LinkClickSelectSchema.optional(),
  include: LinkClickIncludeSchema.optional(),
  where: LinkClickWhereInputSchema.optional(),
  orderBy: z.union([ LinkClickOrderByWithRelationInputSchema.array(),LinkClickOrderByWithRelationInputSchema ]).optional(),
  cursor: LinkClickWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LinkClickScalarFieldEnumSchema,LinkClickScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LinkClickFindManyArgsSchema: z.ZodType<Prisma.LinkClickFindManyArgs> = z.object({
  select: LinkClickSelectSchema.optional(),
  include: LinkClickIncludeSchema.optional(),
  where: LinkClickWhereInputSchema.optional(),
  orderBy: z.union([ LinkClickOrderByWithRelationInputSchema.array(),LinkClickOrderByWithRelationInputSchema ]).optional(),
  cursor: LinkClickWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LinkClickScalarFieldEnumSchema,LinkClickScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LinkClickAggregateArgsSchema: z.ZodType<Prisma.LinkClickAggregateArgs> = z.object({
  where: LinkClickWhereInputSchema.optional(),
  orderBy: z.union([ LinkClickOrderByWithRelationInputSchema.array(),LinkClickOrderByWithRelationInputSchema ]).optional(),
  cursor: LinkClickWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LinkClickGroupByArgsSchema: z.ZodType<Prisma.LinkClickGroupByArgs> = z.object({
  where: LinkClickWhereInputSchema.optional(),
  orderBy: z.union([ LinkClickOrderByWithAggregationInputSchema.array(),LinkClickOrderByWithAggregationInputSchema ]).optional(),
  by: LinkClickScalarFieldEnumSchema.array(),
  having: LinkClickScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LinkClickFindUniqueArgsSchema: z.ZodType<Prisma.LinkClickFindUniqueArgs> = z.object({
  select: LinkClickSelectSchema.optional(),
  include: LinkClickIncludeSchema.optional(),
  where: LinkClickWhereUniqueInputSchema,
}).strict() ;

export const LinkClickFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LinkClickFindUniqueOrThrowArgs> = z.object({
  select: LinkClickSelectSchema.optional(),
  include: LinkClickIncludeSchema.optional(),
  where: LinkClickWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict() ;

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict() ;

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VerificationTokenCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyAndReturnArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const AuthenticatorCreateArgsSchema: z.ZodType<Prisma.AuthenticatorCreateArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  data: z.union([ AuthenticatorCreateInputSchema,AuthenticatorUncheckedCreateInputSchema ]),
}).strict() ;

export const AuthenticatorUpsertArgsSchema: z.ZodType<Prisma.AuthenticatorUpsertArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereUniqueInputSchema,
  create: z.union([ AuthenticatorCreateInputSchema,AuthenticatorUncheckedCreateInputSchema ]),
  update: z.union([ AuthenticatorUpdateInputSchema,AuthenticatorUncheckedUpdateInputSchema ]),
}).strict() ;

export const AuthenticatorCreateManyArgsSchema: z.ZodType<Prisma.AuthenticatorCreateManyArgs> = z.object({
  data: z.union([ AuthenticatorCreateManyInputSchema,AuthenticatorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AuthenticatorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AuthenticatorCreateManyAndReturnArgs> = z.object({
  data: z.union([ AuthenticatorCreateManyInputSchema,AuthenticatorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AuthenticatorDeleteArgsSchema: z.ZodType<Prisma.AuthenticatorDeleteArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereUniqueInputSchema,
}).strict() ;

export const AuthenticatorUpdateArgsSchema: z.ZodType<Prisma.AuthenticatorUpdateArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  data: z.union([ AuthenticatorUpdateInputSchema,AuthenticatorUncheckedUpdateInputSchema ]),
  where: AuthenticatorWhereUniqueInputSchema,
}).strict() ;

export const AuthenticatorUpdateManyArgsSchema: z.ZodType<Prisma.AuthenticatorUpdateManyArgs> = z.object({
  data: z.union([ AuthenticatorUpdateManyMutationInputSchema,AuthenticatorUncheckedUpdateManyInputSchema ]),
  where: AuthenticatorWhereInputSchema.optional(),
}).strict() ;

export const AuthenticatorDeleteManyArgsSchema: z.ZodType<Prisma.AuthenticatorDeleteManyArgs> = z.object({
  where: AuthenticatorWhereInputSchema.optional(),
}).strict() ;

export const CategoryCreateArgsSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const CategoryCreateManyArgsSchema: z.ZodType<Prisma.CategoryCreateManyArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CategoryDeleteArgsSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
}).strict() ;

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict() ;

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict() ;

export const LinkCreateArgsSchema: z.ZodType<Prisma.LinkCreateArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  data: z.union([ LinkCreateInputSchema,LinkUncheckedCreateInputSchema ]),
}).strict() ;

export const LinkUpsertArgsSchema: z.ZodType<Prisma.LinkUpsertArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  where: LinkWhereUniqueInputSchema,
  create: z.union([ LinkCreateInputSchema,LinkUncheckedCreateInputSchema ]),
  update: z.union([ LinkUpdateInputSchema,LinkUncheckedUpdateInputSchema ]),
}).strict() ;

export const LinkCreateManyArgsSchema: z.ZodType<Prisma.LinkCreateManyArgs> = z.object({
  data: z.union([ LinkCreateManyInputSchema,LinkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LinkCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LinkCreateManyAndReturnArgs> = z.object({
  data: z.union([ LinkCreateManyInputSchema,LinkCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LinkDeleteArgsSchema: z.ZodType<Prisma.LinkDeleteArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  where: LinkWhereUniqueInputSchema,
}).strict() ;

export const LinkUpdateArgsSchema: z.ZodType<Prisma.LinkUpdateArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  data: z.union([ LinkUpdateInputSchema,LinkUncheckedUpdateInputSchema ]),
  where: LinkWhereUniqueInputSchema,
}).strict() ;

export const LinkUpdateManyArgsSchema: z.ZodType<Prisma.LinkUpdateManyArgs> = z.object({
  data: z.union([ LinkUpdateManyMutationInputSchema,LinkUncheckedUpdateManyInputSchema ]),
  where: LinkWhereInputSchema.optional(),
}).strict() ;

export const LinkDeleteManyArgsSchema: z.ZodType<Prisma.LinkDeleteManyArgs> = z.object({
  where: LinkWhereInputSchema.optional(),
}).strict() ;

export const LinkClickCreateArgsSchema: z.ZodType<Prisma.LinkClickCreateArgs> = z.object({
  select: LinkClickSelectSchema.optional(),
  include: LinkClickIncludeSchema.optional(),
  data: z.union([ LinkClickCreateInputSchema,LinkClickUncheckedCreateInputSchema ]),
}).strict() ;

export const LinkClickUpsertArgsSchema: z.ZodType<Prisma.LinkClickUpsertArgs> = z.object({
  select: LinkClickSelectSchema.optional(),
  include: LinkClickIncludeSchema.optional(),
  where: LinkClickWhereUniqueInputSchema,
  create: z.union([ LinkClickCreateInputSchema,LinkClickUncheckedCreateInputSchema ]),
  update: z.union([ LinkClickUpdateInputSchema,LinkClickUncheckedUpdateInputSchema ]),
}).strict() ;

export const LinkClickCreateManyArgsSchema: z.ZodType<Prisma.LinkClickCreateManyArgs> = z.object({
  data: z.union([ LinkClickCreateManyInputSchema,LinkClickCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LinkClickCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LinkClickCreateManyAndReturnArgs> = z.object({
  data: z.union([ LinkClickCreateManyInputSchema,LinkClickCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LinkClickDeleteArgsSchema: z.ZodType<Prisma.LinkClickDeleteArgs> = z.object({
  select: LinkClickSelectSchema.optional(),
  include: LinkClickIncludeSchema.optional(),
  where: LinkClickWhereUniqueInputSchema,
}).strict() ;

export const LinkClickUpdateArgsSchema: z.ZodType<Prisma.LinkClickUpdateArgs> = z.object({
  select: LinkClickSelectSchema.optional(),
  include: LinkClickIncludeSchema.optional(),
  data: z.union([ LinkClickUpdateInputSchema,LinkClickUncheckedUpdateInputSchema ]),
  where: LinkClickWhereUniqueInputSchema,
}).strict() ;

export const LinkClickUpdateManyArgsSchema: z.ZodType<Prisma.LinkClickUpdateManyArgs> = z.object({
  data: z.union([ LinkClickUpdateManyMutationInputSchema,LinkClickUncheckedUpdateManyInputSchema ]),
  where: LinkClickWhereInputSchema.optional(),
}).strict() ;

export const LinkClickDeleteManyArgsSchema: z.ZodType<Prisma.LinkClickDeleteManyArgs> = z.object({
  where: LinkClickWhereInputSchema.optional(),
}).strict() ;