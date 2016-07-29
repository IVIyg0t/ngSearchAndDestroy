# ngSearchAndDestroy
Angular 1 module for fuzzy searching capabilities.

## How to use this module
1. use `<ng-search></ng-search>` to easily add a dropdown / text input fuzzy search field.
2. The directive supports these attributes:
	- `in-data` : Acts as list input attribute.  Bind any typical data array or array of objects.
	- `ext` : If `in-data` is bound to an array of Objects, you should define the object key to be displayed in the list here.
	- `out-data` : outData acts as the output binding of the selected data or object from the list.  If `in-data` is an array of objects then `out-data` will too be an object.  If `in-data` is an array of strings then the selected string will be returned to `out-data`. 

## Example:
 
#### JS
```javascript
var dataList = 
	[
		{ name: 'Taylor', id: 1 },
		{ name: 'Luke', id: 2 },
		{ name: 'David', id: 3 },
		{ name: 'Matt', id: 4 }
	];
var selected = null;
```

#### HTML
```HTML
<ng-search in-data="dataList" ext="name" out-data="selected"></ng-search>
```

#### Demo (coming soon)