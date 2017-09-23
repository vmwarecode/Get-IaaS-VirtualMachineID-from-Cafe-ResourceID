//Action Inputs:
//  resourceId  -  string
//
//Return Type: string

var hosts = Server.findAllForType("vCACCAFE:VCACHost");
var cafehost = hosts[0];
var catalogResource = vCACCAFEEntitiesFinder.getCatalogResource(cafehost, resourceId);

return catalogResource.providerBinding.getBindingId();