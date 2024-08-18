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

export const PostTypeScalarFieldEnumSchema = z.enum(['id','name','price','active','order']);

export const DiscountRuleScalarFieldEnumSchema = z.enum(['id','name','discountPercent','createdAt','updatedAt']);

export const QualifyingPostTypeScalarFieldEnumSchema = z.enum(['id','discountRuleId','postTypeId','quantity']);

export const PromotionTypeScalarFieldEnumSchema = z.enum(['id','name','price','active','order']);

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
// POST TYPE SCHEMA
/////////////////////////////////////////

export const PostTypeSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  price: z.number(),
  active: z.boolean(),
  order: z.number().int(),
})

export type PostType = z.infer<typeof PostTypeSchema>

/////////////////////////////////////////
// DISCOUNT RULE SCHEMA
/////////////////////////////////////////

export const DiscountRuleSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  discountPercent: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DiscountRule = z.infer<typeof DiscountRuleSchema>

/////////////////////////////////////////
// QUALIFYING POST TYPE SCHEMA
/////////////////////////////////////////

export const QualifyingPostTypeSchema = z.object({
  id: z.string().uuid(),
  discountRuleId: z.string(),
  postTypeId: z.string(),
  quantity: z.number().int(),
})

export type QualifyingPostType = z.infer<typeof QualifyingPostTypeSchema>

/////////////////////////////////////////
// PROMOTION TYPE SCHEMA
/////////////////////////////////////////

export const PromotionTypeSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  price: z.number(),
  active: z.boolean(),
  order: z.number().int(),
})

export type PromotionType = z.infer<typeof PromotionTypeSchema>

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

// POST TYPE
//------------------------------------------------------

export const PostTypeIncludeSchema: z.ZodType<Prisma.PostTypeInclude> = z.object({
  qualifyingPosts: z.union([z.boolean(),z.lazy(() => QualifyingPostTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PostTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PostTypeArgsSchema: z.ZodType<Prisma.PostTypeDefaultArgs> = z.object({
  select: z.lazy(() => PostTypeSelectSchema).optional(),
  include: z.lazy(() => PostTypeIncludeSchema).optional(),
}).strict();

export const PostTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.PostTypeCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PostTypeCountOutputTypeSelectSchema).nullish(),
}).strict();

export const PostTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.PostTypeCountOutputTypeSelect> = z.object({
  qualifyingPosts: z.boolean().optional(),
}).strict();

export const PostTypeSelectSchema: z.ZodType<Prisma.PostTypeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  price: z.boolean().optional(),
  active: z.boolean().optional(),
  order: z.boolean().optional(),
  qualifyingPosts: z.union([z.boolean(),z.lazy(() => QualifyingPostTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PostTypeCountOutputTypeArgsSchema)]).optional(),
}).strict()

// DISCOUNT RULE
//------------------------------------------------------

export const DiscountRuleIncludeSchema: z.ZodType<Prisma.DiscountRuleInclude> = z.object({
  qualifyingPosts: z.union([z.boolean(),z.lazy(() => QualifyingPostTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DiscountRuleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DiscountRuleArgsSchema: z.ZodType<Prisma.DiscountRuleDefaultArgs> = z.object({
  select: z.lazy(() => DiscountRuleSelectSchema).optional(),
  include: z.lazy(() => DiscountRuleIncludeSchema).optional(),
}).strict();

export const DiscountRuleCountOutputTypeArgsSchema: z.ZodType<Prisma.DiscountRuleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DiscountRuleCountOutputTypeSelectSchema).nullish(),
}).strict();

export const DiscountRuleCountOutputTypeSelectSchema: z.ZodType<Prisma.DiscountRuleCountOutputTypeSelect> = z.object({
  qualifyingPosts: z.boolean().optional(),
}).strict();

export const DiscountRuleSelectSchema: z.ZodType<Prisma.DiscountRuleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  discountPercent: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  qualifyingPosts: z.union([z.boolean(),z.lazy(() => QualifyingPostTypeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DiscountRuleCountOutputTypeArgsSchema)]).optional(),
}).strict()

// QUALIFYING POST TYPE
//------------------------------------------------------

export const QualifyingPostTypeIncludeSchema: z.ZodType<Prisma.QualifyingPostTypeInclude> = z.object({
  discountRule: z.union([z.boolean(),z.lazy(() => DiscountRuleArgsSchema)]).optional(),
  postType: z.union([z.boolean(),z.lazy(() => PostTypeArgsSchema)]).optional(),
}).strict()

export const QualifyingPostTypeArgsSchema: z.ZodType<Prisma.QualifyingPostTypeDefaultArgs> = z.object({
  select: z.lazy(() => QualifyingPostTypeSelectSchema).optional(),
  include: z.lazy(() => QualifyingPostTypeIncludeSchema).optional(),
}).strict();

export const QualifyingPostTypeSelectSchema: z.ZodType<Prisma.QualifyingPostTypeSelect> = z.object({
  id: z.boolean().optional(),
  discountRuleId: z.boolean().optional(),
  postTypeId: z.boolean().optional(),
  quantity: z.boolean().optional(),
  discountRule: z.union([z.boolean(),z.lazy(() => DiscountRuleArgsSchema)]).optional(),
  postType: z.union([z.boolean(),z.lazy(() => PostTypeArgsSchema)]).optional(),
}).strict()

// PROMOTION TYPE
//------------------------------------------------------

export const PromotionTypeSelectSchema: z.ZodType<Prisma.PromotionTypeSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  price: z.boolean().optional(),
  active: z.boolean().optional(),
  order: z.boolean().optional(),
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

export const PostTypeWhereInputSchema: z.ZodType<Prisma.PostTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PostTypeWhereInputSchema),z.lazy(() => PostTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostTypeWhereInputSchema),z.lazy(() => PostTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeListRelationFilterSchema).optional()
}).strict();

export const PostTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.PostTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeOrderByRelationAggregateInputSchema).optional()
}).strict();

export const PostTypeWhereUniqueInputSchema: z.ZodType<Prisma.PostTypeWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => PostTypeWhereInputSchema),z.lazy(() => PostTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostTypeWhereInputSchema),z.lazy(() => PostTypeWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeListRelationFilterSchema).optional()
}).strict());

export const PostTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.PostTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PostTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PostTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PostTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PostTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PostTypeSumOrderByAggregateInputSchema).optional()
}).strict();

export const PostTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PostTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PostTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => PostTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => PostTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const DiscountRuleWhereInputSchema: z.ZodType<Prisma.DiscountRuleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DiscountRuleWhereInputSchema),z.lazy(() => DiscountRuleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DiscountRuleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DiscountRuleWhereInputSchema),z.lazy(() => DiscountRuleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discountPercent: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeListRelationFilterSchema).optional()
}).strict();

export const DiscountRuleOrderByWithRelationInputSchema: z.ZodType<Prisma.DiscountRuleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  discountPercent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeOrderByRelationAggregateInputSchema).optional()
}).strict();

export const DiscountRuleWhereUniqueInputSchema: z.ZodType<Prisma.DiscountRuleWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => DiscountRuleWhereInputSchema),z.lazy(() => DiscountRuleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DiscountRuleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DiscountRuleWhereInputSchema),z.lazy(() => DiscountRuleWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discountPercent: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeListRelationFilterSchema).optional()
}).strict());

export const DiscountRuleOrderByWithAggregationInputSchema: z.ZodType<Prisma.DiscountRuleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  discountPercent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DiscountRuleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DiscountRuleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DiscountRuleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DiscountRuleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DiscountRuleSumOrderByAggregateInputSchema).optional()
}).strict();

export const DiscountRuleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DiscountRuleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DiscountRuleScalarWhereWithAggregatesInputSchema),z.lazy(() => DiscountRuleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DiscountRuleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DiscountRuleScalarWhereWithAggregatesInputSchema),z.lazy(() => DiscountRuleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  discountPercent: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const QualifyingPostTypeWhereInputSchema: z.ZodType<Prisma.QualifyingPostTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QualifyingPostTypeWhereInputSchema),z.lazy(() => QualifyingPostTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QualifyingPostTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QualifyingPostTypeWhereInputSchema),z.lazy(() => QualifyingPostTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discountRuleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postTypeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  discountRule: z.union([ z.lazy(() => DiscountRuleRelationFilterSchema),z.lazy(() => DiscountRuleWhereInputSchema) ]).optional(),
  postType: z.union([ z.lazy(() => PostTypeRelationFilterSchema),z.lazy(() => PostTypeWhereInputSchema) ]).optional(),
}).strict();

export const QualifyingPostTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.QualifyingPostTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discountRuleId: z.lazy(() => SortOrderSchema).optional(),
  postTypeId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  discountRule: z.lazy(() => DiscountRuleOrderByWithRelationInputSchema).optional(),
  postType: z.lazy(() => PostTypeOrderByWithRelationInputSchema).optional()
}).strict();

export const QualifyingPostTypeWhereUniqueInputSchema: z.ZodType<Prisma.QualifyingPostTypeWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    discountRuleId_postTypeId: z.lazy(() => QualifyingPostTypeDiscountRuleIdPostTypeIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    discountRuleId_postTypeId: z.lazy(() => QualifyingPostTypeDiscountRuleIdPostTypeIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  discountRuleId_postTypeId: z.lazy(() => QualifyingPostTypeDiscountRuleIdPostTypeIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => QualifyingPostTypeWhereInputSchema),z.lazy(() => QualifyingPostTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QualifyingPostTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QualifyingPostTypeWhereInputSchema),z.lazy(() => QualifyingPostTypeWhereInputSchema).array() ]).optional(),
  discountRuleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postTypeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  discountRule: z.union([ z.lazy(() => DiscountRuleRelationFilterSchema),z.lazy(() => DiscountRuleWhereInputSchema) ]).optional(),
  postType: z.union([ z.lazy(() => PostTypeRelationFilterSchema),z.lazy(() => PostTypeWhereInputSchema) ]).optional(),
}).strict());

export const QualifyingPostTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.QualifyingPostTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discountRuleId: z.lazy(() => SortOrderSchema).optional(),
  postTypeId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QualifyingPostTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => QualifyingPostTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QualifyingPostTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QualifyingPostTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => QualifyingPostTypeSumOrderByAggregateInputSchema).optional()
}).strict();

export const QualifyingPostTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QualifyingPostTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => QualifyingPostTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => QualifyingPostTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QualifyingPostTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QualifyingPostTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => QualifyingPostTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  discountRuleId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postTypeId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const PromotionTypeWhereInputSchema: z.ZodType<Prisma.PromotionTypeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PromotionTypeWhereInputSchema),z.lazy(() => PromotionTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PromotionTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PromotionTypeWhereInputSchema),z.lazy(() => PromotionTypeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const PromotionTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.PromotionTypeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromotionTypeWhereUniqueInputSchema: z.ZodType<Prisma.PromotionTypeWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => PromotionTypeWhereInputSchema),z.lazy(() => PromotionTypeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PromotionTypeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PromotionTypeWhereInputSchema),z.lazy(() => PromotionTypeWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const PromotionTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.PromotionTypeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PromotionTypeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PromotionTypeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PromotionTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PromotionTypeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PromotionTypeSumOrderByAggregateInputSchema).optional()
}).strict();

export const PromotionTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PromotionTypeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PromotionTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => PromotionTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PromotionTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PromotionTypeScalarWhereWithAggregatesInputSchema),z.lazy(() => PromotionTypeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
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

export const PostTypeCreateInputSchema: z.ZodType<Prisma.PostTypeCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  active: z.boolean().optional(),
  order: z.number().int().optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeCreateNestedManyWithoutPostTypeInputSchema).optional()
}).strict();

export const PostTypeUncheckedCreateInputSchema: z.ZodType<Prisma.PostTypeUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  active: z.boolean().optional(),
  order: z.number().int().optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeUncheckedCreateNestedManyWithoutPostTypeInputSchema).optional()
}).strict();

export const PostTypeUpdateInputSchema: z.ZodType<Prisma.PostTypeUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeUpdateManyWithoutPostTypeNestedInputSchema).optional()
}).strict();

export const PostTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.PostTypeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeUncheckedUpdateManyWithoutPostTypeNestedInputSchema).optional()
}).strict();

export const PostTypeCreateManyInputSchema: z.ZodType<Prisma.PostTypeCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  active: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();

export const PostTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.PostTypeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PostTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PostTypeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DiscountRuleCreateInputSchema: z.ZodType<Prisma.DiscountRuleCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  discountPercent: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeCreateNestedManyWithoutDiscountRuleInputSchema).optional()
}).strict();

export const DiscountRuleUncheckedCreateInputSchema: z.ZodType<Prisma.DiscountRuleUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  discountPercent: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeUncheckedCreateNestedManyWithoutDiscountRuleInputSchema).optional()
}).strict();

export const DiscountRuleUpdateInputSchema: z.ZodType<Prisma.DiscountRuleUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountPercent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeUpdateManyWithoutDiscountRuleNestedInputSchema).optional()
}).strict();

export const DiscountRuleUncheckedUpdateInputSchema: z.ZodType<Prisma.DiscountRuleUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountPercent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  qualifyingPosts: z.lazy(() => QualifyingPostTypeUncheckedUpdateManyWithoutDiscountRuleNestedInputSchema).optional()
}).strict();

export const DiscountRuleCreateManyInputSchema: z.ZodType<Prisma.DiscountRuleCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  discountPercent: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const DiscountRuleUpdateManyMutationInputSchema: z.ZodType<Prisma.DiscountRuleUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountPercent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DiscountRuleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DiscountRuleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountPercent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QualifyingPostTypeCreateInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  discountRule: z.lazy(() => DiscountRuleCreateNestedOneWithoutQualifyingPostsInputSchema),
  postType: z.lazy(() => PostTypeCreateNestedOneWithoutQualifyingPostsInputSchema)
}).strict();

export const QualifyingPostTypeUncheckedCreateInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  discountRuleId: z.string(),
  postTypeId: z.string(),
  quantity: z.number().int()
}).strict();

export const QualifyingPostTypeUpdateInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  discountRule: z.lazy(() => DiscountRuleUpdateOneRequiredWithoutQualifyingPostsNestedInputSchema).optional(),
  postType: z.lazy(() => PostTypeUpdateOneRequiredWithoutQualifyingPostsNestedInputSchema).optional()
}).strict();

export const QualifyingPostTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountRuleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postTypeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QualifyingPostTypeCreateManyInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  discountRuleId: z.string(),
  postTypeId: z.string(),
  quantity: z.number().int()
}).strict();

export const QualifyingPostTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QualifyingPostTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountRuleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postTypeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PromotionTypeCreateInputSchema: z.ZodType<Prisma.PromotionTypeCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  active: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();

export const PromotionTypeUncheckedCreateInputSchema: z.ZodType<Prisma.PromotionTypeUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  active: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();

export const PromotionTypeUpdateInputSchema: z.ZodType<Prisma.PromotionTypeUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PromotionTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.PromotionTypeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PromotionTypeCreateManyInputSchema: z.ZodType<Prisma.PromotionTypeCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  active: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();

export const PromotionTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.PromotionTypeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PromotionTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PromotionTypeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
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

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const QualifyingPostTypeListRelationFilterSchema: z.ZodType<Prisma.QualifyingPostTypeListRelationFilter> = z.object({
  every: z.lazy(() => QualifyingPostTypeWhereInputSchema).optional(),
  some: z.lazy(() => QualifyingPostTypeWhereInputSchema).optional(),
  none: z.lazy(() => QualifyingPostTypeWhereInputSchema).optional()
}).strict();

export const QualifyingPostTypeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.QualifyingPostTypeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.PostTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PostTypeAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PostTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.PostTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PostTypeSumOrderByAggregateInputSchema: z.ZodType<Prisma.PostTypeSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const DiscountRuleCountOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountRuleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  discountPercent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DiscountRuleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountRuleAvgOrderByAggregateInput> = z.object({
  discountPercent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DiscountRuleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountRuleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  discountPercent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DiscountRuleMinOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountRuleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  discountPercent: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DiscountRuleSumOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountRuleSumOrderByAggregateInput> = z.object({
  discountPercent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DiscountRuleRelationFilterSchema: z.ZodType<Prisma.DiscountRuleRelationFilter> = z.object({
  is: z.lazy(() => DiscountRuleWhereInputSchema).optional(),
  isNot: z.lazy(() => DiscountRuleWhereInputSchema).optional()
}).strict();

export const PostTypeRelationFilterSchema: z.ZodType<Prisma.PostTypeRelationFilter> = z.object({
  is: z.lazy(() => PostTypeWhereInputSchema).optional(),
  isNot: z.lazy(() => PostTypeWhereInputSchema).optional()
}).strict();

export const QualifyingPostTypeDiscountRuleIdPostTypeIdCompoundUniqueInputSchema: z.ZodType<Prisma.QualifyingPostTypeDiscountRuleIdPostTypeIdCompoundUniqueInput> = z.object({
  discountRuleId: z.string(),
  postTypeId: z.string()
}).strict();

export const QualifyingPostTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.QualifyingPostTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discountRuleId: z.lazy(() => SortOrderSchema).optional(),
  postTypeId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QualifyingPostTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.QualifyingPostTypeAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QualifyingPostTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.QualifyingPostTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discountRuleId: z.lazy(() => SortOrderSchema).optional(),
  postTypeId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QualifyingPostTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.QualifyingPostTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  discountRuleId: z.lazy(() => SortOrderSchema).optional(),
  postTypeId: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QualifyingPostTypeSumOrderByAggregateInputSchema: z.ZodType<Prisma.QualifyingPostTypeSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromotionTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.PromotionTypeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromotionTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PromotionTypeAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromotionTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PromotionTypeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromotionTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.PromotionTypeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PromotionTypeSumOrderByAggregateInputSchema: z.ZodType<Prisma.PromotionTypeSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => SortOrderSchema).optional()
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

export const QualifyingPostTypeCreateNestedManyWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateNestedManyWithoutPostTypeInput> = z.object({
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema).array(),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutPostTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QualifyingPostTypeCreateManyPostTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const QualifyingPostTypeUncheckedCreateNestedManyWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedCreateNestedManyWithoutPostTypeInput> = z.object({
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema).array(),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutPostTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QualifyingPostTypeCreateManyPostTypeInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const QualifyingPostTypeUpdateManyWithoutPostTypeNestedInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateManyWithoutPostTypeNestedInput> = z.object({
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema).array(),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutPostTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QualifyingPostTypeUpsertWithWhereUniqueWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUpsertWithWhereUniqueWithoutPostTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QualifyingPostTypeCreateManyPostTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QualifyingPostTypeUpdateWithWhereUniqueWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUpdateWithWhereUniqueWithoutPostTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QualifyingPostTypeUpdateManyWithWhereWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUpdateManyWithWhereWithoutPostTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QualifyingPostTypeScalarWhereInputSchema),z.lazy(() => QualifyingPostTypeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const QualifyingPostTypeUncheckedUpdateManyWithoutPostTypeNestedInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedUpdateManyWithoutPostTypeNestedInput> = z.object({
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema).array(),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutPostTypeInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QualifyingPostTypeUpsertWithWhereUniqueWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUpsertWithWhereUniqueWithoutPostTypeInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QualifyingPostTypeCreateManyPostTypeInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QualifyingPostTypeUpdateWithWhereUniqueWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUpdateWithWhereUniqueWithoutPostTypeInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QualifyingPostTypeUpdateManyWithWhereWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUpdateManyWithWhereWithoutPostTypeInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QualifyingPostTypeScalarWhereInputSchema),z.lazy(() => QualifyingPostTypeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const QualifyingPostTypeCreateNestedManyWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateNestedManyWithoutDiscountRuleInput> = z.object({
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema).array(),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QualifyingPostTypeCreateManyDiscountRuleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const QualifyingPostTypeUncheckedCreateNestedManyWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedCreateNestedManyWithoutDiscountRuleInput> = z.object({
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema).array(),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QualifyingPostTypeCreateManyDiscountRuleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const QualifyingPostTypeUpdateManyWithoutDiscountRuleNestedInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateManyWithoutDiscountRuleNestedInput> = z.object({
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema).array(),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QualifyingPostTypeUpsertWithWhereUniqueWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUpsertWithWhereUniqueWithoutDiscountRuleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QualifyingPostTypeCreateManyDiscountRuleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QualifyingPostTypeUpdateWithWhereUniqueWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUpdateWithWhereUniqueWithoutDiscountRuleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QualifyingPostTypeUpdateManyWithWhereWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUpdateManyWithWhereWithoutDiscountRuleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QualifyingPostTypeScalarWhereInputSchema),z.lazy(() => QualifyingPostTypeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const QualifyingPostTypeUncheckedUpdateManyWithoutDiscountRuleNestedInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedUpdateManyWithoutDiscountRuleNestedInput> = z.object({
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema).array(),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QualifyingPostTypeUpsertWithWhereUniqueWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUpsertWithWhereUniqueWithoutDiscountRuleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QualifyingPostTypeCreateManyDiscountRuleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QualifyingPostTypeUpdateWithWhereUniqueWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUpdateWithWhereUniqueWithoutDiscountRuleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QualifyingPostTypeUpdateManyWithWhereWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUpdateManyWithWhereWithoutDiscountRuleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QualifyingPostTypeScalarWhereInputSchema),z.lazy(() => QualifyingPostTypeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DiscountRuleCreateNestedOneWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.DiscountRuleCreateNestedOneWithoutQualifyingPostsInput> = z.object({
  create: z.union([ z.lazy(() => DiscountRuleCreateWithoutQualifyingPostsInputSchema),z.lazy(() => DiscountRuleUncheckedCreateWithoutQualifyingPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DiscountRuleCreateOrConnectWithoutQualifyingPostsInputSchema).optional(),
  connect: z.lazy(() => DiscountRuleWhereUniqueInputSchema).optional()
}).strict();

export const PostTypeCreateNestedOneWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.PostTypeCreateNestedOneWithoutQualifyingPostsInput> = z.object({
  create: z.union([ z.lazy(() => PostTypeCreateWithoutQualifyingPostsInputSchema),z.lazy(() => PostTypeUncheckedCreateWithoutQualifyingPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PostTypeCreateOrConnectWithoutQualifyingPostsInputSchema).optional(),
  connect: z.lazy(() => PostTypeWhereUniqueInputSchema).optional()
}).strict();

export const DiscountRuleUpdateOneRequiredWithoutQualifyingPostsNestedInputSchema: z.ZodType<Prisma.DiscountRuleUpdateOneRequiredWithoutQualifyingPostsNestedInput> = z.object({
  create: z.union([ z.lazy(() => DiscountRuleCreateWithoutQualifyingPostsInputSchema),z.lazy(() => DiscountRuleUncheckedCreateWithoutQualifyingPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DiscountRuleCreateOrConnectWithoutQualifyingPostsInputSchema).optional(),
  upsert: z.lazy(() => DiscountRuleUpsertWithoutQualifyingPostsInputSchema).optional(),
  connect: z.lazy(() => DiscountRuleWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DiscountRuleUpdateToOneWithWhereWithoutQualifyingPostsInputSchema),z.lazy(() => DiscountRuleUpdateWithoutQualifyingPostsInputSchema),z.lazy(() => DiscountRuleUncheckedUpdateWithoutQualifyingPostsInputSchema) ]).optional(),
}).strict();

export const PostTypeUpdateOneRequiredWithoutQualifyingPostsNestedInputSchema: z.ZodType<Prisma.PostTypeUpdateOneRequiredWithoutQualifyingPostsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PostTypeCreateWithoutQualifyingPostsInputSchema),z.lazy(() => PostTypeUncheckedCreateWithoutQualifyingPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PostTypeCreateOrConnectWithoutQualifyingPostsInputSchema).optional(),
  upsert: z.lazy(() => PostTypeUpsertWithoutQualifyingPostsInputSchema).optional(),
  connect: z.lazy(() => PostTypeWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PostTypeUpdateToOneWithWhereWithoutQualifyingPostsInputSchema),z.lazy(() => PostTypeUpdateWithoutQualifyingPostsInputSchema),z.lazy(() => PostTypeUncheckedUpdateWithoutQualifyingPostsInputSchema) ]).optional(),
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

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
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

export const QualifyingPostTypeCreateWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateWithoutPostTypeInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  discountRule: z.lazy(() => DiscountRuleCreateNestedOneWithoutQualifyingPostsInputSchema)
}).strict();

export const QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedCreateWithoutPostTypeInput> = z.object({
  id: z.string().uuid().optional(),
  discountRuleId: z.string(),
  quantity: z.number().int()
}).strict();

export const QualifyingPostTypeCreateOrConnectWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateOrConnectWithoutPostTypeInput> = z.object({
  where: z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema) ]),
}).strict();

export const QualifyingPostTypeCreateManyPostTypeInputEnvelopeSchema: z.ZodType<Prisma.QualifyingPostTypeCreateManyPostTypeInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QualifyingPostTypeCreateManyPostTypeInputSchema),z.lazy(() => QualifyingPostTypeCreateManyPostTypeInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const QualifyingPostTypeUpsertWithWhereUniqueWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpsertWithWhereUniqueWithoutPostTypeInput> = z.object({
  where: z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QualifyingPostTypeUpdateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUncheckedUpdateWithoutPostTypeInputSchema) ]),
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutPostTypeInputSchema) ]),
}).strict();

export const QualifyingPostTypeUpdateWithWhereUniqueWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateWithWhereUniqueWithoutPostTypeInput> = z.object({
  where: z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QualifyingPostTypeUpdateWithoutPostTypeInputSchema),z.lazy(() => QualifyingPostTypeUncheckedUpdateWithoutPostTypeInputSchema) ]),
}).strict();

export const QualifyingPostTypeUpdateManyWithWhereWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateManyWithWhereWithoutPostTypeInput> = z.object({
  where: z.lazy(() => QualifyingPostTypeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QualifyingPostTypeUpdateManyMutationInputSchema),z.lazy(() => QualifyingPostTypeUncheckedUpdateManyWithoutPostTypeInputSchema) ]),
}).strict();

export const QualifyingPostTypeScalarWhereInputSchema: z.ZodType<Prisma.QualifyingPostTypeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QualifyingPostTypeScalarWhereInputSchema),z.lazy(() => QualifyingPostTypeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QualifyingPostTypeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QualifyingPostTypeScalarWhereInputSchema),z.lazy(() => QualifyingPostTypeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  discountRuleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postTypeId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const QualifyingPostTypeCreateWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateWithoutDiscountRuleInput> = z.object({
  id: z.string().uuid().optional(),
  quantity: z.number().int(),
  postType: z.lazy(() => PostTypeCreateNestedOneWithoutQualifyingPostsInputSchema)
}).strict();

export const QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInput> = z.object({
  id: z.string().uuid().optional(),
  postTypeId: z.string(),
  quantity: z.number().int()
}).strict();

export const QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateOrConnectWithoutDiscountRuleInput> = z.object({
  where: z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema) ]),
}).strict();

export const QualifyingPostTypeCreateManyDiscountRuleInputEnvelopeSchema: z.ZodType<Prisma.QualifyingPostTypeCreateManyDiscountRuleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => QualifyingPostTypeCreateManyDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeCreateManyDiscountRuleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const QualifyingPostTypeUpsertWithWhereUniqueWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpsertWithWhereUniqueWithoutDiscountRuleInput> = z.object({
  where: z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => QualifyingPostTypeUpdateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUncheckedUpdateWithoutDiscountRuleInputSchema) ]),
  create: z.union([ z.lazy(() => QualifyingPostTypeCreateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUncheckedCreateWithoutDiscountRuleInputSchema) ]),
}).strict();

export const QualifyingPostTypeUpdateWithWhereUniqueWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateWithWhereUniqueWithoutDiscountRuleInput> = z.object({
  where: z.lazy(() => QualifyingPostTypeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => QualifyingPostTypeUpdateWithoutDiscountRuleInputSchema),z.lazy(() => QualifyingPostTypeUncheckedUpdateWithoutDiscountRuleInputSchema) ]),
}).strict();

export const QualifyingPostTypeUpdateManyWithWhereWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateManyWithWhereWithoutDiscountRuleInput> = z.object({
  where: z.lazy(() => QualifyingPostTypeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QualifyingPostTypeUpdateManyMutationInputSchema),z.lazy(() => QualifyingPostTypeUncheckedUpdateManyWithoutDiscountRuleInputSchema) ]),
}).strict();

export const DiscountRuleCreateWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.DiscountRuleCreateWithoutQualifyingPostsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  discountPercent: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const DiscountRuleUncheckedCreateWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.DiscountRuleUncheckedCreateWithoutQualifyingPostsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  discountPercent: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const DiscountRuleCreateOrConnectWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.DiscountRuleCreateOrConnectWithoutQualifyingPostsInput> = z.object({
  where: z.lazy(() => DiscountRuleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DiscountRuleCreateWithoutQualifyingPostsInputSchema),z.lazy(() => DiscountRuleUncheckedCreateWithoutQualifyingPostsInputSchema) ]),
}).strict();

export const PostTypeCreateWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.PostTypeCreateWithoutQualifyingPostsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  active: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();

export const PostTypeUncheckedCreateWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.PostTypeUncheckedCreateWithoutQualifyingPostsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  active: z.boolean().optional(),
  order: z.number().int().optional()
}).strict();

export const PostTypeCreateOrConnectWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.PostTypeCreateOrConnectWithoutQualifyingPostsInput> = z.object({
  where: z.lazy(() => PostTypeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PostTypeCreateWithoutQualifyingPostsInputSchema),z.lazy(() => PostTypeUncheckedCreateWithoutQualifyingPostsInputSchema) ]),
}).strict();

export const DiscountRuleUpsertWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.DiscountRuleUpsertWithoutQualifyingPostsInput> = z.object({
  update: z.union([ z.lazy(() => DiscountRuleUpdateWithoutQualifyingPostsInputSchema),z.lazy(() => DiscountRuleUncheckedUpdateWithoutQualifyingPostsInputSchema) ]),
  create: z.union([ z.lazy(() => DiscountRuleCreateWithoutQualifyingPostsInputSchema),z.lazy(() => DiscountRuleUncheckedCreateWithoutQualifyingPostsInputSchema) ]),
  where: z.lazy(() => DiscountRuleWhereInputSchema).optional()
}).strict();

export const DiscountRuleUpdateToOneWithWhereWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.DiscountRuleUpdateToOneWithWhereWithoutQualifyingPostsInput> = z.object({
  where: z.lazy(() => DiscountRuleWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DiscountRuleUpdateWithoutQualifyingPostsInputSchema),z.lazy(() => DiscountRuleUncheckedUpdateWithoutQualifyingPostsInputSchema) ]),
}).strict();

export const DiscountRuleUpdateWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.DiscountRuleUpdateWithoutQualifyingPostsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountPercent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DiscountRuleUncheckedUpdateWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.DiscountRuleUncheckedUpdateWithoutQualifyingPostsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountPercent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PostTypeUpsertWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.PostTypeUpsertWithoutQualifyingPostsInput> = z.object({
  update: z.union([ z.lazy(() => PostTypeUpdateWithoutQualifyingPostsInputSchema),z.lazy(() => PostTypeUncheckedUpdateWithoutQualifyingPostsInputSchema) ]),
  create: z.union([ z.lazy(() => PostTypeCreateWithoutQualifyingPostsInputSchema),z.lazy(() => PostTypeUncheckedCreateWithoutQualifyingPostsInputSchema) ]),
  where: z.lazy(() => PostTypeWhereInputSchema).optional()
}).strict();

export const PostTypeUpdateToOneWithWhereWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.PostTypeUpdateToOneWithWhereWithoutQualifyingPostsInput> = z.object({
  where: z.lazy(() => PostTypeWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PostTypeUpdateWithoutQualifyingPostsInputSchema),z.lazy(() => PostTypeUncheckedUpdateWithoutQualifyingPostsInputSchema) ]),
}).strict();

export const PostTypeUpdateWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.PostTypeUpdateWithoutQualifyingPostsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PostTypeUncheckedUpdateWithoutQualifyingPostsInputSchema: z.ZodType<Prisma.PostTypeUncheckedUpdateWithoutQualifyingPostsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
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

export const QualifyingPostTypeCreateManyPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateManyPostTypeInput> = z.object({
  id: z.string().uuid().optional(),
  discountRuleId: z.string(),
  quantity: z.number().int()
}).strict();

export const QualifyingPostTypeUpdateWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateWithoutPostTypeInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  discountRule: z.lazy(() => DiscountRuleUpdateOneRequiredWithoutQualifyingPostsNestedInputSchema).optional()
}).strict();

export const QualifyingPostTypeUncheckedUpdateWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedUpdateWithoutPostTypeInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountRuleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QualifyingPostTypeUncheckedUpdateManyWithoutPostTypeInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedUpdateManyWithoutPostTypeInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  discountRuleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QualifyingPostTypeCreateManyDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeCreateManyDiscountRuleInput> = z.object({
  id: z.string().uuid().optional(),
  postTypeId: z.string(),
  quantity: z.number().int()
}).strict();

export const QualifyingPostTypeUpdateWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateWithoutDiscountRuleInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  postType: z.lazy(() => PostTypeUpdateOneRequiredWithoutQualifyingPostsNestedInputSchema).optional()
}).strict();

export const QualifyingPostTypeUncheckedUpdateWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedUpdateWithoutDiscountRuleInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postTypeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QualifyingPostTypeUncheckedUpdateManyWithoutDiscountRuleInputSchema: z.ZodType<Prisma.QualifyingPostTypeUncheckedUpdateManyWithoutDiscountRuleInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postTypeId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
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

export const PostTypeFindFirstArgsSchema: z.ZodType<Prisma.PostTypeFindFirstArgs> = z.object({
  select: PostTypeSelectSchema.optional(),
  include: PostTypeIncludeSchema.optional(),
  where: PostTypeWhereInputSchema.optional(),
  orderBy: z.union([ PostTypeOrderByWithRelationInputSchema.array(),PostTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: PostTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PostTypeScalarFieldEnumSchema,PostTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PostTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PostTypeFindFirstOrThrowArgs> = z.object({
  select: PostTypeSelectSchema.optional(),
  include: PostTypeIncludeSchema.optional(),
  where: PostTypeWhereInputSchema.optional(),
  orderBy: z.union([ PostTypeOrderByWithRelationInputSchema.array(),PostTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: PostTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PostTypeScalarFieldEnumSchema,PostTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PostTypeFindManyArgsSchema: z.ZodType<Prisma.PostTypeFindManyArgs> = z.object({
  select: PostTypeSelectSchema.optional(),
  include: PostTypeIncludeSchema.optional(),
  where: PostTypeWhereInputSchema.optional(),
  orderBy: z.union([ PostTypeOrderByWithRelationInputSchema.array(),PostTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: PostTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PostTypeScalarFieldEnumSchema,PostTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PostTypeAggregateArgsSchema: z.ZodType<Prisma.PostTypeAggregateArgs> = z.object({
  where: PostTypeWhereInputSchema.optional(),
  orderBy: z.union([ PostTypeOrderByWithRelationInputSchema.array(),PostTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: PostTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PostTypeGroupByArgsSchema: z.ZodType<Prisma.PostTypeGroupByArgs> = z.object({
  where: PostTypeWhereInputSchema.optional(),
  orderBy: z.union([ PostTypeOrderByWithAggregationInputSchema.array(),PostTypeOrderByWithAggregationInputSchema ]).optional(),
  by: PostTypeScalarFieldEnumSchema.array(),
  having: PostTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PostTypeFindUniqueArgsSchema: z.ZodType<Prisma.PostTypeFindUniqueArgs> = z.object({
  select: PostTypeSelectSchema.optional(),
  include: PostTypeIncludeSchema.optional(),
  where: PostTypeWhereUniqueInputSchema,
}).strict() ;

export const PostTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PostTypeFindUniqueOrThrowArgs> = z.object({
  select: PostTypeSelectSchema.optional(),
  include: PostTypeIncludeSchema.optional(),
  where: PostTypeWhereUniqueInputSchema,
}).strict() ;

export const DiscountRuleFindFirstArgsSchema: z.ZodType<Prisma.DiscountRuleFindFirstArgs> = z.object({
  select: DiscountRuleSelectSchema.optional(),
  include: DiscountRuleIncludeSchema.optional(),
  where: DiscountRuleWhereInputSchema.optional(),
  orderBy: z.union([ DiscountRuleOrderByWithRelationInputSchema.array(),DiscountRuleOrderByWithRelationInputSchema ]).optional(),
  cursor: DiscountRuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DiscountRuleScalarFieldEnumSchema,DiscountRuleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DiscountRuleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DiscountRuleFindFirstOrThrowArgs> = z.object({
  select: DiscountRuleSelectSchema.optional(),
  include: DiscountRuleIncludeSchema.optional(),
  where: DiscountRuleWhereInputSchema.optional(),
  orderBy: z.union([ DiscountRuleOrderByWithRelationInputSchema.array(),DiscountRuleOrderByWithRelationInputSchema ]).optional(),
  cursor: DiscountRuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DiscountRuleScalarFieldEnumSchema,DiscountRuleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DiscountRuleFindManyArgsSchema: z.ZodType<Prisma.DiscountRuleFindManyArgs> = z.object({
  select: DiscountRuleSelectSchema.optional(),
  include: DiscountRuleIncludeSchema.optional(),
  where: DiscountRuleWhereInputSchema.optional(),
  orderBy: z.union([ DiscountRuleOrderByWithRelationInputSchema.array(),DiscountRuleOrderByWithRelationInputSchema ]).optional(),
  cursor: DiscountRuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DiscountRuleScalarFieldEnumSchema,DiscountRuleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DiscountRuleAggregateArgsSchema: z.ZodType<Prisma.DiscountRuleAggregateArgs> = z.object({
  where: DiscountRuleWhereInputSchema.optional(),
  orderBy: z.union([ DiscountRuleOrderByWithRelationInputSchema.array(),DiscountRuleOrderByWithRelationInputSchema ]).optional(),
  cursor: DiscountRuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DiscountRuleGroupByArgsSchema: z.ZodType<Prisma.DiscountRuleGroupByArgs> = z.object({
  where: DiscountRuleWhereInputSchema.optional(),
  orderBy: z.union([ DiscountRuleOrderByWithAggregationInputSchema.array(),DiscountRuleOrderByWithAggregationInputSchema ]).optional(),
  by: DiscountRuleScalarFieldEnumSchema.array(),
  having: DiscountRuleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DiscountRuleFindUniqueArgsSchema: z.ZodType<Prisma.DiscountRuleFindUniqueArgs> = z.object({
  select: DiscountRuleSelectSchema.optional(),
  include: DiscountRuleIncludeSchema.optional(),
  where: DiscountRuleWhereUniqueInputSchema,
}).strict() ;

export const DiscountRuleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DiscountRuleFindUniqueOrThrowArgs> = z.object({
  select: DiscountRuleSelectSchema.optional(),
  include: DiscountRuleIncludeSchema.optional(),
  where: DiscountRuleWhereUniqueInputSchema,
}).strict() ;

export const QualifyingPostTypeFindFirstArgsSchema: z.ZodType<Prisma.QualifyingPostTypeFindFirstArgs> = z.object({
  select: QualifyingPostTypeSelectSchema.optional(),
  include: QualifyingPostTypeIncludeSchema.optional(),
  where: QualifyingPostTypeWhereInputSchema.optional(),
  orderBy: z.union([ QualifyingPostTypeOrderByWithRelationInputSchema.array(),QualifyingPostTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: QualifyingPostTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QualifyingPostTypeScalarFieldEnumSchema,QualifyingPostTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QualifyingPostTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.QualifyingPostTypeFindFirstOrThrowArgs> = z.object({
  select: QualifyingPostTypeSelectSchema.optional(),
  include: QualifyingPostTypeIncludeSchema.optional(),
  where: QualifyingPostTypeWhereInputSchema.optional(),
  orderBy: z.union([ QualifyingPostTypeOrderByWithRelationInputSchema.array(),QualifyingPostTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: QualifyingPostTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QualifyingPostTypeScalarFieldEnumSchema,QualifyingPostTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QualifyingPostTypeFindManyArgsSchema: z.ZodType<Prisma.QualifyingPostTypeFindManyArgs> = z.object({
  select: QualifyingPostTypeSelectSchema.optional(),
  include: QualifyingPostTypeIncludeSchema.optional(),
  where: QualifyingPostTypeWhereInputSchema.optional(),
  orderBy: z.union([ QualifyingPostTypeOrderByWithRelationInputSchema.array(),QualifyingPostTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: QualifyingPostTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QualifyingPostTypeScalarFieldEnumSchema,QualifyingPostTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QualifyingPostTypeAggregateArgsSchema: z.ZodType<Prisma.QualifyingPostTypeAggregateArgs> = z.object({
  where: QualifyingPostTypeWhereInputSchema.optional(),
  orderBy: z.union([ QualifyingPostTypeOrderByWithRelationInputSchema.array(),QualifyingPostTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: QualifyingPostTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const QualifyingPostTypeGroupByArgsSchema: z.ZodType<Prisma.QualifyingPostTypeGroupByArgs> = z.object({
  where: QualifyingPostTypeWhereInputSchema.optional(),
  orderBy: z.union([ QualifyingPostTypeOrderByWithAggregationInputSchema.array(),QualifyingPostTypeOrderByWithAggregationInputSchema ]).optional(),
  by: QualifyingPostTypeScalarFieldEnumSchema.array(),
  having: QualifyingPostTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const QualifyingPostTypeFindUniqueArgsSchema: z.ZodType<Prisma.QualifyingPostTypeFindUniqueArgs> = z.object({
  select: QualifyingPostTypeSelectSchema.optional(),
  include: QualifyingPostTypeIncludeSchema.optional(),
  where: QualifyingPostTypeWhereUniqueInputSchema,
}).strict() ;

export const QualifyingPostTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.QualifyingPostTypeFindUniqueOrThrowArgs> = z.object({
  select: QualifyingPostTypeSelectSchema.optional(),
  include: QualifyingPostTypeIncludeSchema.optional(),
  where: QualifyingPostTypeWhereUniqueInputSchema,
}).strict() ;

export const PromotionTypeFindFirstArgsSchema: z.ZodType<Prisma.PromotionTypeFindFirstArgs> = z.object({
  select: PromotionTypeSelectSchema.optional(),
  where: PromotionTypeWhereInputSchema.optional(),
  orderBy: z.union([ PromotionTypeOrderByWithRelationInputSchema.array(),PromotionTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: PromotionTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PromotionTypeScalarFieldEnumSchema,PromotionTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PromotionTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PromotionTypeFindFirstOrThrowArgs> = z.object({
  select: PromotionTypeSelectSchema.optional(),
  where: PromotionTypeWhereInputSchema.optional(),
  orderBy: z.union([ PromotionTypeOrderByWithRelationInputSchema.array(),PromotionTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: PromotionTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PromotionTypeScalarFieldEnumSchema,PromotionTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PromotionTypeFindManyArgsSchema: z.ZodType<Prisma.PromotionTypeFindManyArgs> = z.object({
  select: PromotionTypeSelectSchema.optional(),
  where: PromotionTypeWhereInputSchema.optional(),
  orderBy: z.union([ PromotionTypeOrderByWithRelationInputSchema.array(),PromotionTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: PromotionTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PromotionTypeScalarFieldEnumSchema,PromotionTypeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PromotionTypeAggregateArgsSchema: z.ZodType<Prisma.PromotionTypeAggregateArgs> = z.object({
  where: PromotionTypeWhereInputSchema.optional(),
  orderBy: z.union([ PromotionTypeOrderByWithRelationInputSchema.array(),PromotionTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: PromotionTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PromotionTypeGroupByArgsSchema: z.ZodType<Prisma.PromotionTypeGroupByArgs> = z.object({
  where: PromotionTypeWhereInputSchema.optional(),
  orderBy: z.union([ PromotionTypeOrderByWithAggregationInputSchema.array(),PromotionTypeOrderByWithAggregationInputSchema ]).optional(),
  by: PromotionTypeScalarFieldEnumSchema.array(),
  having: PromotionTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PromotionTypeFindUniqueArgsSchema: z.ZodType<Prisma.PromotionTypeFindUniqueArgs> = z.object({
  select: PromotionTypeSelectSchema.optional(),
  where: PromotionTypeWhereUniqueInputSchema,
}).strict() ;

export const PromotionTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PromotionTypeFindUniqueOrThrowArgs> = z.object({
  select: PromotionTypeSelectSchema.optional(),
  where: PromotionTypeWhereUniqueInputSchema,
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

export const PostTypeCreateArgsSchema: z.ZodType<Prisma.PostTypeCreateArgs> = z.object({
  select: PostTypeSelectSchema.optional(),
  include: PostTypeIncludeSchema.optional(),
  data: z.union([ PostTypeCreateInputSchema,PostTypeUncheckedCreateInputSchema ]),
}).strict() ;

export const PostTypeUpsertArgsSchema: z.ZodType<Prisma.PostTypeUpsertArgs> = z.object({
  select: PostTypeSelectSchema.optional(),
  include: PostTypeIncludeSchema.optional(),
  where: PostTypeWhereUniqueInputSchema,
  create: z.union([ PostTypeCreateInputSchema,PostTypeUncheckedCreateInputSchema ]),
  update: z.union([ PostTypeUpdateInputSchema,PostTypeUncheckedUpdateInputSchema ]),
}).strict() ;

export const PostTypeCreateManyArgsSchema: z.ZodType<Prisma.PostTypeCreateManyArgs> = z.object({
  data: z.union([ PostTypeCreateManyInputSchema,PostTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PostTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PostTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ PostTypeCreateManyInputSchema,PostTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PostTypeDeleteArgsSchema: z.ZodType<Prisma.PostTypeDeleteArgs> = z.object({
  select: PostTypeSelectSchema.optional(),
  include: PostTypeIncludeSchema.optional(),
  where: PostTypeWhereUniqueInputSchema,
}).strict() ;

export const PostTypeUpdateArgsSchema: z.ZodType<Prisma.PostTypeUpdateArgs> = z.object({
  select: PostTypeSelectSchema.optional(),
  include: PostTypeIncludeSchema.optional(),
  data: z.union([ PostTypeUpdateInputSchema,PostTypeUncheckedUpdateInputSchema ]),
  where: PostTypeWhereUniqueInputSchema,
}).strict() ;

export const PostTypeUpdateManyArgsSchema: z.ZodType<Prisma.PostTypeUpdateManyArgs> = z.object({
  data: z.union([ PostTypeUpdateManyMutationInputSchema,PostTypeUncheckedUpdateManyInputSchema ]),
  where: PostTypeWhereInputSchema.optional(),
}).strict() ;

export const PostTypeDeleteManyArgsSchema: z.ZodType<Prisma.PostTypeDeleteManyArgs> = z.object({
  where: PostTypeWhereInputSchema.optional(),
}).strict() ;

export const DiscountRuleCreateArgsSchema: z.ZodType<Prisma.DiscountRuleCreateArgs> = z.object({
  select: DiscountRuleSelectSchema.optional(),
  include: DiscountRuleIncludeSchema.optional(),
  data: z.union([ DiscountRuleCreateInputSchema,DiscountRuleUncheckedCreateInputSchema ]),
}).strict() ;

export const DiscountRuleUpsertArgsSchema: z.ZodType<Prisma.DiscountRuleUpsertArgs> = z.object({
  select: DiscountRuleSelectSchema.optional(),
  include: DiscountRuleIncludeSchema.optional(),
  where: DiscountRuleWhereUniqueInputSchema,
  create: z.union([ DiscountRuleCreateInputSchema,DiscountRuleUncheckedCreateInputSchema ]),
  update: z.union([ DiscountRuleUpdateInputSchema,DiscountRuleUncheckedUpdateInputSchema ]),
}).strict() ;

export const DiscountRuleCreateManyArgsSchema: z.ZodType<Prisma.DiscountRuleCreateManyArgs> = z.object({
  data: z.union([ DiscountRuleCreateManyInputSchema,DiscountRuleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const DiscountRuleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DiscountRuleCreateManyAndReturnArgs> = z.object({
  data: z.union([ DiscountRuleCreateManyInputSchema,DiscountRuleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const DiscountRuleDeleteArgsSchema: z.ZodType<Prisma.DiscountRuleDeleteArgs> = z.object({
  select: DiscountRuleSelectSchema.optional(),
  include: DiscountRuleIncludeSchema.optional(),
  where: DiscountRuleWhereUniqueInputSchema,
}).strict() ;

export const DiscountRuleUpdateArgsSchema: z.ZodType<Prisma.DiscountRuleUpdateArgs> = z.object({
  select: DiscountRuleSelectSchema.optional(),
  include: DiscountRuleIncludeSchema.optional(),
  data: z.union([ DiscountRuleUpdateInputSchema,DiscountRuleUncheckedUpdateInputSchema ]),
  where: DiscountRuleWhereUniqueInputSchema,
}).strict() ;

export const DiscountRuleUpdateManyArgsSchema: z.ZodType<Prisma.DiscountRuleUpdateManyArgs> = z.object({
  data: z.union([ DiscountRuleUpdateManyMutationInputSchema,DiscountRuleUncheckedUpdateManyInputSchema ]),
  where: DiscountRuleWhereInputSchema.optional(),
}).strict() ;

export const DiscountRuleDeleteManyArgsSchema: z.ZodType<Prisma.DiscountRuleDeleteManyArgs> = z.object({
  where: DiscountRuleWhereInputSchema.optional(),
}).strict() ;

export const QualifyingPostTypeCreateArgsSchema: z.ZodType<Prisma.QualifyingPostTypeCreateArgs> = z.object({
  select: QualifyingPostTypeSelectSchema.optional(),
  include: QualifyingPostTypeIncludeSchema.optional(),
  data: z.union([ QualifyingPostTypeCreateInputSchema,QualifyingPostTypeUncheckedCreateInputSchema ]),
}).strict() ;

export const QualifyingPostTypeUpsertArgsSchema: z.ZodType<Prisma.QualifyingPostTypeUpsertArgs> = z.object({
  select: QualifyingPostTypeSelectSchema.optional(),
  include: QualifyingPostTypeIncludeSchema.optional(),
  where: QualifyingPostTypeWhereUniqueInputSchema,
  create: z.union([ QualifyingPostTypeCreateInputSchema,QualifyingPostTypeUncheckedCreateInputSchema ]),
  update: z.union([ QualifyingPostTypeUpdateInputSchema,QualifyingPostTypeUncheckedUpdateInputSchema ]),
}).strict() ;

export const QualifyingPostTypeCreateManyArgsSchema: z.ZodType<Prisma.QualifyingPostTypeCreateManyArgs> = z.object({
  data: z.union([ QualifyingPostTypeCreateManyInputSchema,QualifyingPostTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const QualifyingPostTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.QualifyingPostTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ QualifyingPostTypeCreateManyInputSchema,QualifyingPostTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const QualifyingPostTypeDeleteArgsSchema: z.ZodType<Prisma.QualifyingPostTypeDeleteArgs> = z.object({
  select: QualifyingPostTypeSelectSchema.optional(),
  include: QualifyingPostTypeIncludeSchema.optional(),
  where: QualifyingPostTypeWhereUniqueInputSchema,
}).strict() ;

export const QualifyingPostTypeUpdateArgsSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateArgs> = z.object({
  select: QualifyingPostTypeSelectSchema.optional(),
  include: QualifyingPostTypeIncludeSchema.optional(),
  data: z.union([ QualifyingPostTypeUpdateInputSchema,QualifyingPostTypeUncheckedUpdateInputSchema ]),
  where: QualifyingPostTypeWhereUniqueInputSchema,
}).strict() ;

export const QualifyingPostTypeUpdateManyArgsSchema: z.ZodType<Prisma.QualifyingPostTypeUpdateManyArgs> = z.object({
  data: z.union([ QualifyingPostTypeUpdateManyMutationInputSchema,QualifyingPostTypeUncheckedUpdateManyInputSchema ]),
  where: QualifyingPostTypeWhereInputSchema.optional(),
}).strict() ;

export const QualifyingPostTypeDeleteManyArgsSchema: z.ZodType<Prisma.QualifyingPostTypeDeleteManyArgs> = z.object({
  where: QualifyingPostTypeWhereInputSchema.optional(),
}).strict() ;

export const PromotionTypeCreateArgsSchema: z.ZodType<Prisma.PromotionTypeCreateArgs> = z.object({
  select: PromotionTypeSelectSchema.optional(),
  data: z.union([ PromotionTypeCreateInputSchema,PromotionTypeUncheckedCreateInputSchema ]),
}).strict() ;

export const PromotionTypeUpsertArgsSchema: z.ZodType<Prisma.PromotionTypeUpsertArgs> = z.object({
  select: PromotionTypeSelectSchema.optional(),
  where: PromotionTypeWhereUniqueInputSchema,
  create: z.union([ PromotionTypeCreateInputSchema,PromotionTypeUncheckedCreateInputSchema ]),
  update: z.union([ PromotionTypeUpdateInputSchema,PromotionTypeUncheckedUpdateInputSchema ]),
}).strict() ;

export const PromotionTypeCreateManyArgsSchema: z.ZodType<Prisma.PromotionTypeCreateManyArgs> = z.object({
  data: z.union([ PromotionTypeCreateManyInputSchema,PromotionTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PromotionTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PromotionTypeCreateManyAndReturnArgs> = z.object({
  data: z.union([ PromotionTypeCreateManyInputSchema,PromotionTypeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PromotionTypeDeleteArgsSchema: z.ZodType<Prisma.PromotionTypeDeleteArgs> = z.object({
  select: PromotionTypeSelectSchema.optional(),
  where: PromotionTypeWhereUniqueInputSchema,
}).strict() ;

export const PromotionTypeUpdateArgsSchema: z.ZodType<Prisma.PromotionTypeUpdateArgs> = z.object({
  select: PromotionTypeSelectSchema.optional(),
  data: z.union([ PromotionTypeUpdateInputSchema,PromotionTypeUncheckedUpdateInputSchema ]),
  where: PromotionTypeWhereUniqueInputSchema,
}).strict() ;

export const PromotionTypeUpdateManyArgsSchema: z.ZodType<Prisma.PromotionTypeUpdateManyArgs> = z.object({
  data: z.union([ PromotionTypeUpdateManyMutationInputSchema,PromotionTypeUncheckedUpdateManyInputSchema ]),
  where: PromotionTypeWhereInputSchema.optional(),
}).strict() ;

export const PromotionTypeDeleteManyArgsSchema: z.ZodType<Prisma.PromotionTypeDeleteManyArgs> = z.object({
  where: PromotionTypeWhereInputSchema.optional(),
}).strict() ;