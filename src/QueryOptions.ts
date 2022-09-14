export interface QueryOptions {
	$select?: string;
	$filter?: string;
	$search?: string;
	$top?: number;
	$count?: boolean;
	$skip?: string;
	$expand?: string;
	$orderby?: string;
	$format?: string;
}
