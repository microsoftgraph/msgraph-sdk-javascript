# Query Parameters

## \$SELECT

`.select()` can take a string property, an array of strings or you can pass in each value as a separate argument.

```typescript
try {
	// Below three statements are same
	let res1 = await client
		.api("/me/people")
		.select("displayName")
		.select("department")
		.get();
	let res2 = await client
		.api("/me/people")
		.select("displayName", "department")
		.get();
	let res3 = await client
		.api("/me/people")
		.select(["displayName", "department"])
		.get();
} catch (error) {
	throw error;
}
```

## \$EXPAND

`.expand()` can take a string property, an array of strings or you can pass in each value as a separate argument.

```typescript
try {
	// Below three statements are same
	let res1 = await client
		.api("/me/people")
		.expand("manager")
		.expand("directReports")
		.get();
	let res2 = await client
		.api("/me/people")
		.expand("manager", "directReports")
		.get();
	let res3 = await client
		.api("/me/people")
		.expand(["manager", "directReports"])
		.get();
} catch (error) {
	throw error;
}
```

## \$ORDERBY

`.orderby()` can take a string property, an array of strings or you can pass in each value as a separate argument.

```typescript
try {
	// Below three statements are same
	let res1 = await client
		.api("/me/messages")
		.orderby("name")
		.orderby("subject")
		.get();
	let res2 = await client
		.api("/me/messages")
		.orderby("name", "subject")
		.get();
	let res3 = await client
		.api("/me/messages")
		.orderby(["name", "subject"])
		.get();
} catch (error) {
	throw error;
}
```

## \$TOP

`.top()` can take only a number as a parameter. Calling it multiple times is not supported.

```typescript
try {
	let res = await client
		.api("/me/contacts")
		.top(5)
		.get();
	console.log(res);
} catch (error) {
	throw error;
}
```

## \$SKIP

`.skip()` can take only a number as a parameter. Calling it multiple times is not supported.

```typescript
try {
	let res = await client
		.api("/me/events")
		.skip(10)
		.get();
	console.log(res);
} catch (error) {
	throw error;
}
```

## \$COUNT

Set `.count()` to true to additionally return the number of objects in the collection.

```typescript
try {
	let res = await client
		.api("/me/calendars")
		.count(true)
		.get();
	console.log(res);
} catch (error) {
	throw error;
}
```

## \$FILTER

Pass a filter string to `.filter()` for filtering result collections. Calling filter multiple times will override previous filter strings.

```typescript
try {
	let res = await client
		.api("/users")
		.filter("startswith(displayName, 'dicaprio')")
		.get();
	console.log(res);
} catch (error) {
	throw error;
}
```

## \$SEARCH

Pass a search string to `.search()` to restrict the results of a request to match a search criterion. Calling search multiple times will override previous search strings.

```typescript
try {
	let res = await client
		.api("/me/people")
		.search("dicaprio")
		.get();
	console.log(res);
} catch (error) {
	throw error;
}
```
