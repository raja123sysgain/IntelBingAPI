﻿(function () {
    function i() {
        var r = document.getElementsByTagName("head")[0],
            u = navigator,
            f = !r || !n.onloadcallback && document.readyState !== "complete" || (u.userAgent.indexOf("MSIE") !== -1 || u.vendor === "Apple Computer, Inc.") && document.readyState !== "complete" && document.body === null,
            i;
        f ? document.write('<script src="' + t + '" type="text/javascript" ><\/script>') : (i = document.createElement("script"), i.type = "text/javascript", i.language = "javascript", i.src = t, r.appendChild(i))
    }
    var n, t;
    window.Microsoft = window.Microsoft || {}, window.Microsoft.Maps = window.Microsoft.Maps || {}, n = {
        domain: "http://ecn.dev.virtualearth.net/mapcontrol/v7.0",
        version: "7.0.20120723124524.18",
        locale: "en-us",
        ishttpsenabled: false,
        onloadcallback: "__onscriptload__",
        tilegeneration: 1001,
        zoomOriginWidth: 256,
        defaultTileSize: 256,
        minMercatorZoom: 1,
        maxMercatorZoom: 20,
        maxFPS: 60,
        maxConcurrentTileDownloads: 12,
        spacerImageUrl: "http://www.bing.com/maps/i/spacer.gif",
        disableVenueMaps: false,
        disableMicroPOI: false,
        disableDirections: false,
        disableAnalytics: false,
        disableSearch: false,
        disableStreetside: false,
        streetsideGlobalMetadataUriFormat: "http://ecn.dev.virtualearth.net/REST/V1/Imagery/BlockView/StreetMetadata/ECN/{0}/{1}/{2}/{3}.js?jsonp={4}&key=AvlNiRQgHx0x9v3UNufLEfme5-g467LK_fbxxteQANuhtNoL6E9Gjhb_-Nl_FCRL",
        streetsideChunkMetadataUriFormat: "http://ecn.dev.virtualearth.net/REST/V1/Imagery/BlockView/ChunkMetadata/ECN/{0}/{1}/{2}/{3}.js?jsonp={4}&key=AvlNiRQgHx0x9v3UNufLEfme5-g467LK_fbxxteQANuhtNoL6E9Gjhb_-Nl_FCRL",
        streetsideCoverageMercatorUriFormat: "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/hcn{quadkey}?g={generation}&n=z",
        streetsideCoverageBirdseyeUriFormat: "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/hcs{quadkey}?g={generation}&dir={dir}&n=z",
        streetsideImageryUriFormat: "http://ecn.t{1}.tiles.virtualearth.net/tiles/bvi{2}?g={0}&ir=ir0&mkt=en-us&n=f",
        streetsideSingleBlockLookupWithDataUriFormat: "http://dev.virtualearth.net/REST/V1/Imagery/BlockView/BlockLookupWithData/{0}/{1}/{2},{3}/{4}?jsonp={5}&key=AvlNiRQgHx0x9v3UNufLEfme5-g467LK_fbxxteQANuhtNoL6E9Gjhb_-Nl_FCRL",
        streetsideSingleBlockTokenLookupWithDataUriFormat: "http://dev.virtualearth.net/REST/V1/Imagery/BlockView/BlockLookupWithData/{0}/{1}/{2}?jsonp={3}&key=AvlNiRQgHx0x9v3UNufLEfme5-g467LK_fbxxteQANuhtNoL6E9Gjhb_-Nl_FCRL",
        streetsideCubeImageryUriFormat: "http://ecn.t{0}.tiles.virtualearth.net/tiles/hs{1}.jpg?g={2}&n=z",
        streetsideCubeDataLookupUriFormat: "http://dev.virtualearth.net/mapcontrol/HumanScaleServices/GetBubbles.ashx?c={0}&n={1}&s={2}&e={3}&w={4}&jsCallback={5}&key={6}",
        streetsideTileGeneration: "864",
        streetsideImageReportingUriFormat: "https://support.discoverbing.com/default.aspx?mkt={0}&productkey=bingmapprivacy&ct=eformts&(!)_SessionID=12345678&(!)_PermalinkURL={1}&(!)_Timestamp={2}&(!)_BubbleID={3}&(!)_CoordinatesofPro={4}",
        streetsidePermalinkUriFormat: "http://www.bing.com/maps/?v=2&cp={0}~{1}&lvl=22&sty=t~pixelOffset~{2}~streetSide~{3}~isPrivacyFocusEnabled~{4}~blockID~{5}",
        streetside360PrivacyReportUriFormat: "http://www.bing.com/maps/?mkt={0}&sty=x~lat~{1}~lon~{2}~alt~{3}~z~{4}~h~{5}~p~{6}~b~{7}~pid~5082&app=5082",
        transitTrainLineComBuyTicketsUriFormat: "http://www.thetrainline.com/buytickets/?utm_source=Microsoft&utm_medium=Maps&WT.mc_id={0}",
        preloadBingTheme: 0,
        init: function () {
            var f, r, u;
            this.protocol = this.ishttpsenabled ? "https://" : "http://", f = "onscriptload", this.onloadcallback === "__" + f + "__" && (this.onloadcallback = null);
            var t = this.domain + "/css/bin/" + this.version + "/en/",
                i = this.domain + "/i/",
                n = this.domain + "/js/bin/" + this.version + "/en-us/";
            this.jsPath = n, this.ddDelayControl = n + "veapidelay.js", this.ddDelayStyles = t + "mapdelay.css", this.ddCoreStyles = t + "mapcontrol.css", this.ddDelayStylesIE6 = t + "iev6.css", this.ddStreetsideControl = n + "veapistreetside.js", this.ddStreetsideStyles = t + "mapstreetside.css", this.ddVenueMaps = n + "veapiVenueMaps.js", this.ddMicroPOI = n + "veapiMicroPOI.js", this.ddMicroPOICss = t + "veapiMicroPOI.css", this.ddDirectionsJs = n + "veapiDirections.js", this.ddDirectionsCss = t + "mapDirections.css", this.directionsImagePath = i + "bin/" + this.version + "/Directions/", this.ddTraffic = n + "veapiTraffic.js", this.ddOverlaysStyleV2Js = n + "veapiOverlayStyleV2.js", this.ddOverlaysStyleV2Css = t + "veapiOverlayStyleV2.css", this.ddAnalyticsJs = n + "veapiAnalytics.js", this.ddBingThemeJs = n + "veapiBingTheme.js", this.ddBingThemeCss = t + "veapiBingTheme.css", this.ddSearchJs = n + "veapiSearch.js", this.ddSearchCss = t + "", this.venueMapsCss = t + "venuemaps.css", this.venueMapsEroServiceAppId = "BF17C84531C2B15EBE4BACA0F545AF4040188EFA", r = [
                ["logServiceUriFormat", "{urischeme}dev.virtualearth.net/webservices/v1/LoggingService/LoggingService.svc/Log?entry=0&fmt=1&type=3&group=MapControl&name=AJAX&version={version}&mkt={culture}&auth={credentials}&jsonp=microsoftMapsNetworkCallback"],
                ["logOSServiceUriFormat", "{urischeme}dev.virtualearth.net/webservices/v1/LoggingService/LoggingService.svc/Log?entry=0&fmt=1&type=3&group=MapControl&name=imageryOS&version={version}&mkt={culture}&auth={credentials}&jsonp=microsoftMapsNetworkCallback"],
                ["roadUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/r{quadkey}?g={generation}&mkt={culture}&lbl=l1&stl=h&shading=hill&n=z"],
                ["roadUnlabeledUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/r{quadkey}?g={generation}&mkt={culture}&lbl=l0&stl=h&shading=hill&n=z"],
                ["aerialUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/a{quadkey}.jpeg?g={generation}&n=z"],
                ["aerialWithLabelsUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/h{quadkey}.jpeg?g={generation}&mkt={culture}&n=z"],
                ["enhancedBirdseyeUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/svi{quadkey}?g={generation}&dir={dir}&n=z"],
                ["enhancedBirdseyeWithLabelsUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/cmd/svhybrid?a={quadkey}&g={generation}&dir={dir}&n=z"],
                ["nativeBirdseyeUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/o{quadkey}-{runtimeindex}-{level}-{index}?g={generation}"],
                ["nativeBirdseyeWithLabelsUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a={quadkey}-{runtimeindex}-{level}-{index}&g={generation}"],
                ["collinsBartUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/r{quadkey}.png?g={generation}&productSet=mmCB"],
                ["ordnanceSurveyUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/r{quadkey}.png?g={generation}&productSet=mmOS"],
                ["fbUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/r{quadkey}?g={generation}&mkt={culture}&lbl=l1&stl=fb&shading=hill&n=z&key=AkF0mEyG789RQA6CcLimWZMzrDNF6MNSwRJOmNWb9gK_JGiwOBeMoQUoY1MFqksg"],
                ["fbUnlabeledUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/r{quadkey}?g={generation}&mkt={culture}&lbl=l0&stl=fb&shading=hill&n=z&key=AkF0mEyG789RQA6CcLimWZMzrDNF6MNSwRJOmNWb9gK_JGiwOBeMoQUoY1MFqksg"],
                ["bingMapsRESTServicesUrl", "{urischeme}dev.virtualearth.net/REST/v1/Locations"],
                ["imageryMetadataUrl", "{urischeme}dev.virtualearth.net/REST/V1/Imagery/Metadata/{imagerySet}?jsonp=microsoftMapsNetworkCallback&jsonso={jsono}&key={credentials}&centerPoint=47.6,-122.2&zoomLevel=1&include=ImageryProviders&culture={culture}"],
                ["elevationServiceUrl", "{urischeme}dev.virtualearth.net/REST/v1/Elevation/BoundingRect/{south},{west},{north},{east}/{rows}/{cols}?jsonp=microsoftMapsNetworkCallback&jsonso={jsono}&key={credentials}"],
                ["nativeBirdseyeMetadataUrl", "{urischeme}dev.virtualearth.net/REST/V1/Imagery/Metadata/Birdseye/{centerpoint}?jsonp=microsoftMapsNetworkCallback&jsonso={jsono}&key={credentials}&zl={zoom}&dir={heading}&dl=2"],
                ["venueMapsMetadataJsonpUrl", "http://maps.slapi0.virtualearth.net/VenueMapMetadata.ashx?id={0}"],
                ["venueMapsTileUrl", "default={urischeme}venuemaps.virtualearth.net/{0}/{1}/{{quadkey}}.png;prod={urischeme}venuemaps.virtualearth.net/{0}/{1}/{{quadkey}}.png;dev={urischeme}bingmapsdevelopment.blob.core.windows.net/{0}/{1}/{{quadkey}}.png;staging={urischeme}stagingembedmap.blob.core.windows.net/{0}/{1}/{{quadkey}}.png"],
                ["venueMapsNearbyUrl", "{urischeme}dev.virtualearth.net/REST/v1/VenueMaps/PointRadius/{location}/{radius}?jsonp=microsoftMapsNetworkCallback&jsonso={jsono}&output=json&key={credentials}"],
                ["venueMapsEroServiceUrl", "http://api.bing.net/json.aspx?AppId={appid}&Query={query}&Sources=Phonebook&Version=2.0&Market=en-us&UILanguage=en&Latitude={latitude}&Longitude={longitude}&Radius=10.0&Options=EnableHighlighting&Phonebook.Count=1&Phonebook.Offset=0&Phonebook.FileType=YP&Phonebook.SortBy=Distance&JsonType=callback&JsonCallback={jsonp}&Phonebook.LocId={ypid}"],
                ["hotRegionsRoadUrl", "{urischeme}ecn.dynamic.t{subdomain}.tiles.virtualearth.net/comp/CompositionHandler/{quadkey}.json?mkt={culture}&it=G,VE,BX,L,LA&shading=hill&jsonp={jsonp}&jsonso={jsonso}&output=json&v=3"],
                ["hotRegionsAerialWithLabelsUrl", "{urischeme}ecn.dynamic.t{subdomain}.tiles.virtualearth.net/comp/CompositionHandler/{quadkey}.json?mkt={culture}&it=A,G,L&shading=hill&jsonp={jsonp}&jsonso={jsonso}&output=json&v=3"],
                ["onDemandRoadUriFormat", "{urischeme}ecn.dynamic.t{subdomain}.tiles.virtualearth.net/comp/CompositionHandler/{quadkey}?mkt={culture}&it=G,VE,BX,L,LA&shading=hill&n=z"],
                ["onDemandAerialWithLabelsUriFormat", "{urischeme}ecn.dynamic.t{subdomain}.tiles.virtualearth.net/comp/CompositionHandler/{quadkey}?mkt={culture}&it=A,G,L&shading=hill&n=z"],
                ["microPOIHotRegionsUrl", "{urischeme}ecn.dynamic.t{subdomain}.tiles.virtualearth.net/mpoi/MicroPoi/{quadkey}.json?q={query}&filter={filter}&jsonp={jsonp}&jsonso={jsonso}&output=json"],
                ["microPOITilesUrl", "{urischeme}ecn.dynamic.t{subdomain}.tiles.virtualearth.net/mpoi/MicroPoi/{quadkey}?q={query}&filter={filter}"],
                ["streetsideCoverageMercatorUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/hcn{quadkey}?g={generation}&n=z"],
                ["streetsideCoverageBirdseyeUriFormat", "{urischeme}ecn.t{subdomain}.tiles.virtualearth.net/tiles/hcs{quadkey}?g={generation}&dir={dir}&n=z"],
                ["trafficUriFormat", "{urischeme}t{subdomain}.tiles.virtualearth.net/tiles/dp/content?p=tf&a={quadkey}&n=z"],
                ["imageryCopyrightUrl", "{urischeme}dev.virtualearth.net/REST/V1/Imagery/Copyright/{culture}/{imagerySet}/{zoom}/{minLat}/{minLon}/{maxLat}/{maxLon}?output=json&dir={heading}&jsonp=microsoftMapsNetworkCallback&jsonso={jsono}&key={credentials}"],
                ["directionsService", "{urischeme}dev.virtualearth.net/mapcontrol/directions.ashx?"],
                ["directionsMaxWaypoints", "25"],
                ["searchService", "{urischeme}dev.virtualearth.net/services/v1/SearchService/SearchService.asmx/Search2"],
                ["geocodingService", "{urischeme}dev.virtualearth.net/services/v1/geocodeservice/geocodeservice.asmx"],
                ["ddAdvancedShapes", n + "veapiAdvancedShapes.js"],
                ["bingThemeIconUrlFormat", i + "BingTheme/pins/pin_{iconStyle}{imageryStyle}{state}.png"],
                ["biciLoggingService", "{urischeme}dev.virtualearth.net/mapcontrol/logging.ashx"],
                ["localDetailsUrl", "http://www.bing.com/local/details.aspx?lid={0}&q={1}&mkt={culture}&FORM={2}"]
            ], u = r.length;
            while (u--) this[r[u][0]] = r[u][1].replace(/{urischeme}/g, this.protocol).replace(/{version}/g, this.version).replace(/{culture}/g, this.locale).replace(/{generation}/g, this.tilegeneration);
            this.locale.toLowerCase() === "en-us" ? this.defaultAerialTiltOn = !0 : this.locale.toLowerCase() === "en-gb" ? (this.defaultAerialTiltOn = !0, this.allowCollinsBart = !0, this.collinsBartMinZoom = 14, this.collinsBartMaxZoom = 17, this.collinsBartBounds = "51.737859,-0.612711,51.219099,0.21;51.669855,0.21,51.368438,0.306658", this.allowOrdnanceSurvey = !0, this.ordnanceSurveyMinZoom = 12, this.ordnanceSurveyMaxZoom = 17, this.ordnanceSurveyBounds = "51.00,-6.599071,49.80,1.102680;54.84,-5.473597,51.00,2.280852;55.33,-5.875136,54.84,-1.150838;60.98,-9.358483,55.33,-1.163498") : this.defaultAerialTiltOn = !1, this.notileImageUrl = i + "notile.png", this.pushpinImageUrl = i + "poi_search.png", this.microPOIImageUrl = i + "/MicroPOI/", this.venueMapsNumberOfMapTileServers = 4, this.venueMapsTileServerSubdomainsX = "0,2,4,6", this.venueMapsTileServerSubdomainsY = "1,3,5,7", this.logoBingMapsLink = "http://www.bing.com/maps/?v=2&cp={0}~{1}&lvl={2}&FORM=BMLOGO", this.logoBingSearchUrl = "http://www.bing.com/search?q={0}&FORM=BMSDK1", this.biciPID = "5901", this.cursorPath = this.domain + "/cursors/", this.imagePath = i
        }
    }, n.init(), window.Microsoft.Maps.Globals = n, t = n.jsPath + (typeof VEAPI_perflog == "undefined" ? "veapicore.js" : "veapicorePerf.js"), 0 ? n.coreJs = t : i()
})()