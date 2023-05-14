// CRUD operations
import { z } from "../deps.ts";
import { PentagonCreateItemError, PentagonKeyError } from "./errors.ts";
import { AccessKey, CreatedOrUpdatedItem } from "./types.ts";

/** Some reference code

async function insertUser(user: User) {
  const primaryKey = ["users", user.id];
  const byEmailKey = ["users_by_email", user.email];
  const res = await kv.atomic()
    .check({ key: primaryKey, versionstamp: null })
    .check({ key: byEmailKey, versionstamp: null })
    .set(primaryKey, user)
    .set(byEmailKey, user)
    .commit();
  if (res === null) {
    throw new TypeError("User with ID or email already exists");
  }
}

async function getUser(id: string): Promise<User | null> {
  const res = await kv.get<User>(["users", id]);
  return res.value;
}

async function getUserByEmail(email: string): Promise<User | null> {
  const res = await kv.get<User>(["users_by_email", email]);
  return res.value;
}*/

/*

Create `where` limitations to everything
-> Where is used to create limitations

2 different cases:

if we're searching by an index (primary key or index)
-> then just search by those keys

-> otherwise, we need to perform a `listAll`, then
	filter by our `where` clause.

->
where: {  }

*/

/*
Indexed keys:


*/

/* export async function create<T extends ReturnType<typeof z.object>>(
  kv: Deno.Kv,
  tableName: string,
  item: T,
  key: AccessKey,
): Promise<CreatedOrUpdatedItem<T>> {
  const primaryKey = [tableName, primaryKeyValue];
  // @todo: secondary keys
  const res = await kv.atomic()
    .check({ key: primaryKey, versionstamp: null })
    // .check({ key: byEmailKey, versionstamp: null })
    .set(primaryKey, item)
    // .set(byEmailKey, user)
    .commit();

  if (res.ok) {
    return {
      ...item,
      versionstamp: res.versionstamp,
    };
  }
  throw new PentagonCreateItemError(`Could not create item.`);
}

export async function read<T extends ReturnType<typeof z.object>>(
  kv: Deno.Kv,
  tableName: string,
  key: AccessKey,
) {
  if (key.primaryKey) {
    const res = await kv.get<T>([tableName, key.primaryKey]);
    return res.value;
  } else if (key.secondaryKey) {
    for (const [keyValue, value] of Object.entries(key.secondaryKey)) {
      const res = await kv.get<T>([`${tableName}_by_${keyValue}`, value]);
      return res.value;
    }
  }

  throw new Error("Please provide either `primaryKey` or `secondaryKey`.");
}

export async function update<T extends ReturnType<typeof z.object>>(
  kv: Deno.Kv,
  tableName: string,
  key: AccessKey,
) {
  if (key.primaryKey) {
    const res = await kv.get<T>([`${tableName}`, value]);
    return res.value;
  } else if (key.secondaryKey) {
    const res = await kv.get<T>([`${tableName}_by_${keyValue}`, value]);
    return res.value;
  }

  throw new Error("Please provide either `primaryKey` or `secondaryKey`.");
}


export async function remove<T extends ReturnType<typeof z.object>>(
  kv: Deno.Kv,
  tableName: string,
  key: AccessKey,
) {
  if (key.primaryKey) {
    const res = await kv.get<T>([`${tableName}`, value]);
    return res.value;
  } else if (key.secondaryKey) {
    const res = await kv.get<T>([`${tableName}_by_${keyValue}`, value]);
    return res.value;
  }

  throw new Error("Please provide either `primaryKey` or `secondaryKey`.");
} */
