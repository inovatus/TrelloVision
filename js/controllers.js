


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
function Home($scope, TrelloMeService) {
	TrelloMeService.loadData($scope);
	$scope.me = TrelloMeService.me();
}