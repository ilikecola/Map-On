webvowl.app=function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){n(70),n(72),e.exports=n(73)},6:function(e,t){e.exports=d3},70:function(e,t){},72:function(e,t){function n(){var e,t,n=-1;return"Microsoft Internet Explorer"===navigator.appName?(e=navigator.userAgent,t=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"),null!==t.exec(e)&&(n=parseFloat(RegExp.$1))):"Netscape"===navigator.appName&&(e=navigator.userAgent,t=new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"),null!==t.exec(e)&&(n=parseFloat(RegExp.$1))),n}function o(){var e=n();if(e>0&&11>=e){document.write('<div id="browserCheck">The WebVOWL demo does not work in Internet Explorer. Please use another browser, such as <a href="http://www.mozilla.org/firefox/">Mozilla Firefox</a> or <a href="https://www.google.com/chrome/">Google Chrome</a>, to run the WebVOWL demo.</div>');var t=document.getElementById("canvasArea"),o=document.getElementById("detailsArea"),a=document.getElementById("optionsArea");t.className="hidden",o.className="hidden",a.className="hidden"}}e.exports=o},73:function(e,t,n){(function(t){e.exports=function(){function e(){u.graphContainerSelector(l),u.selectionModules().push(f),u.selectionModules().push(v),u.selectionModules().push(x),u.filterModules().push(p),u.filterModules().push(y),u.filterModules().push(g),u.filterModules().push(m),u.filterModules().push(b),u.filterModules().push(w),u.filterModules().push(h),u.filterModules().push(C),h.setDegreeQueryFunction(function(){return 0})}function o(){var e=t.select(l),n=e.select("svg");e.style("height","100%"),n.attr("width","100%").attr("height","100%"),d.updateStyle()}var a,i,r,l="#graph",s={},d=webvowl.graph(),u=d.graphOptions(),c=n(74)(d),p=webvowl.modules.statistics(),f=(webvowl.util.languageTools(),webvowl.modules.focuser()),v=webvowl.modules.selectionDetailsDisplayer(c.updateSelectionInformation),y=webvowl.modules.datatypeFilter(),g=webvowl.modules.subclassFilter(),m=webvowl.modules.disjointFilter(),h=webvowl.modules.nodeDegreeFilter(),b=webvowl.modules.setOperatorFilter(),w=webvowl.modules.nodeScalingSwitch(d),C=webvowl.modules.compactNotationSwitch(d),x=webvowl.modules.pickAndPin();return s.initialize=function(){e(),a=n(75)(d,c,u),r=n(76)(d,x),i=n(77)(d,x,r,u),u.selectionModules().push(r),u.filterModules().push(r),d.start(),o()},s.loadVowlFile=function(e){a.loadFromText(e)},s.setOntologyLayout=function(e){r.setOntologyLayout(e)},s.centerNode=function(e){i.selectNode(e)},s.centerProperty=function(e){i.selectProperty(e)},s.setSelectedDomain=function(e){c.setSelectedDomain(e)},s.setSaveOntologyLayoutCallback=function(e){r.setSaveOntologyLayoutCallback(e)},s.setOntologyInfoCallback=function(e){c.setOntologyInfoCallback(e)},s.setElementInfoCallback=function(e){c.setElementInfoCallback(e)},s}}).call(t,n(6))},74:function(e,t,n){(function(t){e.exports=function(e){function n(t,n,o){var a=[];a.title=F.textInLanguage(w.title,e.language()),a.about=w.iri,a.about.url=w.iri,a.description=F.textInLanguage(w.description,e.language()),a.version=w.version;var i=w.author;i instanceof Array?i=i.join(", "):"string"!=typeof i&&(i="--"),a.authors=i,t=t||{},a.classCount=t.classCount||n.classCount(),a.objectPropertyCount=t.objectPropertyCount||n.objectPropertyCount(),a.datatypePropertyCount=t.datatypePropertyCount||n.datatypePropertyCount(),a.individualCount=t.totalIndividualCount||n.totalIndividualCount(),a.nodeCount=n.nodeCount(),a.edgeCount=n.edgeCount(),a.metadata=o||{},void 0!==x&&x(a)}function o(e){var t=a(e,0);void 0!==I&&I(t)}function a(e,t){var n=[];return n.element=i(e),(E.isProperty(e)||E.isNode(e))&&(n.type=e.type(),n.iri=e.iri(),n.label=e.labelForCurrentLanguage(),n.attributes=e.attributes(),n.description=e.descriptionForCurrentLanguage(),n.comment=e.commentForCurrentLanguage(),n.annotations=e.annotations(),n.equivalents=e.equivalents(),E.isProperty(e)?(0==t&&(n.domain=a(e.domain(),1),n.range=a(e.range(),1)),void 0!==e.inverse()&&(n.inverse.label=e.inverse().labelForCurrentLanguage(),n.inverse.iri=e.inverse().iri()),n.subproperties=e.subproperties(),n.superproperties=e.superproperties(),n.cardinality=e.cardinality(),n.minCardinality=e.minCardinality(),n.maxCardinality=e.maxCardinality()):E.isNode(e)&&(n.individuals=e.individuals(),n.disjointWith=e.disjointWith())),n}function i(e){return void 0===e?"none":E.isLabel(e)?"label":E.isDatatype(e)?"datatype":E.isObjectProperty(e)?"object_property":E.isDatatypeProperty(e)?"datatype_property":E.isRdfsSubClassOf(e)?"rdfs_subclass_of":E.isNode(e)?"node":E.isProperty(e)?"property":"none"}function r(e,n,o,a){var i=n||o||"";t.selectAll(e).each(function(e,n){void 0!==a?t.select(this).append("a").attr("href",a).attr("target","_blank").text(i):t.select(this).text(i),t.select(this).attr("value",i)})}function l(e,n){t.selectAll(e).each(function(e,o){t.select(this).classed("hidden",n)})}function s(e,n,o){t.select("#classSelectionInformation").classed("hidden",!e),t.select("#propertySelectionInformation").classed("hidden",!n),t.select("#noSelectionInformation").classed("hidden",!o)}function d(e){var n="owl:DatatypeProperty"===e.type(),o=e.domain().iri()===N;o|="Thing"==e.domain().labelForCurrentLanguage(),s(!1,!0,!1),u(t.select("#propname"),e.labelForCurrentLanguage(),e.iri()),r("#typeProp",e.type()),l("#btn_select_datatype_property",!n),l("#webvowl_warning",o||!n),r("#webvowl_warning span","This datatype is from another domain."),void 0!==e.inverse()?(t.select("#inverse").classed("hidden",!1),u(t.select("#inverse span"),e.inverse().labelForCurrentLanguage(),e.inverse().iri())):t.select("#inverse").classed("hidden",!0);var a=t.select("#propEquivUri");y(a,e.equivalents()),y(t.select("#subproperties"),e.subproperties()),y(t.select("#superproperties"),e.superproperties()),void 0!==e.minCardinality()?(t.select("#infoCardinality").classed("hidden",!0),t.select("#minCardinality").classed("hidden",!1),t.select("#minCardinality span").text(e.minCardinality()),t.select("#maxCardinality").classed("hidden",!1),void 0!==e.maxCardinality()?t.select("#maxCardinality span").text(e.maxCardinality()):t.select("#maxCardinality span").text("*")):void 0!==e.cardinality()?(t.select("#minCardinality").classed("hidden",!0),t.select("#maxCardinality").classed("hidden",!0),t.select("#infoCardinality").classed("hidden",!1),t.select("#infoCardinality span").text(e.cardinality())):(t.select("#infoCardinality").classed("hidden",!0),t.select("#minCardinality").classed("hidden",!0),t.select("#maxCardinality").classed("hidden",!0)),u(t.select("#domain"),e.domain().labelForCurrentLanguage(),e.domain().iri()),u(t.select("#range"),e.range().labelForCurrentLanguage(),e.range().iri()),p(e.attributes(),t.select("#propAttributes")),g(t.select("#propDescription"),e.descriptionForCurrentLanguage()),g(t.select("#propComment"),e.commentForCurrentLanguage()),b(t.select("#propertySelectionInformation"),e.annotations())}function u(e,t,n){e.selectAll("*").remove(),c(e,t,n)}function c(e,t,n){var o;o=n?e.append("a").attr("href",n).attr("title",n).attr("target","_blank"):e.append("span"),o.text(t)}function p(e,n){var o=t.select(n.node().parentNode);e&&e.length>0&&(f("object",e),f("datatype",e),f("rdf",e)),e&&e.length>0?(n.text(e.join(", ")),o.classed("hidden",!1)):o.classed("hidden",!0)}function f(e,t){var n=t.indexOf(e);n>-1&&t.splice(n,1)}function v(e){s(!0,!1,!1),u(t.select("#name"),e.labelForCurrentLanguage(),e.iri());var n=t.select("#classEquivUri");y(n,e.equivalents()),t.select("#typeNode").text(e.type()),y(t.select("#individuals"),e.individuals());var o=t.select("#disjointNodes"),a=t.select(o.node().parentNode);void 0!==e.disjointWith()?(o.selectAll("*").remove(),e.disjointWith().forEach(function(e,t){t>0&&o.append("span").text(", "),c(o,e.labelForCurrentLanguage(),e.iri())}),a.classed("hidden",!1)):a.classed("hidden",!0),p(e.attributes(),t.select("#classAttributes")),g(t.select("#nodeDescription"),e.descriptionForCurrentLanguage()),g(t.select("#nodeComment"),e.commentForCurrentLanguage()),b(t.select("#classSelectionInformation"),e.annotations())}function y(e,n){var o=t.select(e.node().parentNode);n&&n.length?(e.selectAll("*").remove(),n.forEach(function(t,n){n>0&&e.append("span").text(", "),c(e,t.labelForCurrentLanguage(),t.iri())}),o.classed("hidden",!1)):o.classed("hidden",!0)}function g(e,n){var o=t.select(e.node().parentNode),a=!!n;n&&e.text(n),o.classed("hidden",!a)}function m(n){n=n||[],n.sort(function(e,t){return e===webvowl.util.constants().LANG_IRIBASED?-1:t===webvowl.util.constants().LANG_IRIBASED?1:e===webvowl.util.constants().LANG_UNDEFINED?-1:t===webvowl.util.constants().LANG_UNDEFINED?1:e.localeCompare(t)});var o=t.select("#language").on("change",function(){e.language(t.event.target.value),updateGraphInformation(),L.updateSelectionInformation(C)});o.selectAll("option").remove(),o.selectAll("option").data(n).enter().append("option").attr("value",function(e){return e}).text(function(e){return e}),h(o,n,"en")||h(o,n,webvowl.util.constants().LANG_UNDEFINED)||h(o,n,webvowl.util.constants().LANG_IRIBASED)}function h(t,n,o){var a=n.indexOf(o);return a>=0?(t.property("selectedIndex",a),e.language(o),!0):!1}function b(e,n){n=n||{};var o=[];for(var a in n)n.hasOwnProperty(a)&&o.push(n[a][0]);e.selectAll(".annotation").remove(),e.selectAll(".annotation").data(o).enter().append("p").classed("annotation",!0).classed("statisticDetails",!0).text(function(e){return e.identifier+":"}).append("span").each(function(e){c(t.select(this),e.value,"iri"===e.type?e.value:void 0)})}var w,C,x,I,N,L={},F=webvowl.util.languageTools(),E=webvowl.util.elementTools();return L.setup=function(){},L.setSelectedDomain=function(e){N=e},L.setOntologyInfoCallback=function(e){x=e},L.setElementInfoCallback=function(e){I=e},L.updateOntologyInformation=function(e,t){e=e||{},w=e.header||{},n(e.metrics,t,w.other),L.updateSelectionInformation(void 0),m(w.languages)},L.updateSelectionInformation=function(e){C=e;var t=document.getElementById("tab_node_info");null!==t&&t.className.indexOf("active")<0&&t.click(),s(!1,!1,!0),E.isProperty(e)?d(e):E.isNode(e)&&v(e),o(e)},L}}).call(t,n(6))},75:function(e,t){e.exports=function(e,t,n){var o={},a=webvowl.util.languageTools(),i=webvowl.modules.statistics();return o.loadFromText=function(o){var r,l,s="";if(o&&(l=JSON.parse(o),!r)){var d=l.header?l.header.title:void 0,u=a.textInLanguage(d);r=u?u:s}n.data(l),e.reload(),t.updateOntologyInformation(l,i)},o.loadFromUrl=function(e){$.ajax({async:!1,type:"GET",url:e,success:function(e){this.loadFromText(JSON.stringify(e))}})},o}},76:function(e,t){e.exports=function(e,t){function n(e){return void 0===e?"none":d.isLabel(e)?"label":d.isDatatype(e)?"datatype":d.isObjectProperty(e)?"object_property":d.isDatatypeProperty(e)?"datatype_property":d.isRdfsSubClassOf(e)?"rdfs_subclass_of":d.isNode(e)?"node":d.isProperty(e)?"property":"none"}var o,a,i,r,l,s={},d=webvowl.util.elementTools();return s.setup=function(){t.enabled(!0),o=!0,r=[]},s.setup(),s.handle=function(e){void 0!==l&&o&&"node"===n(e)&&l(e.iri,!0,e.x,e.y)},s.filter=function(e,t){a=e,i=t,a.forEach(function(e){for(var t=0;t<r.length;t++)if(r[t].nodeid===e.iri()){e.px=parseInt(r[t].layoutX+"",10),e.py=parseInt(r[t].layoutY+"",10),e.x=e.px,e.y=e.py,e.pinned(!0);break}e.unpin=function(){void 0!==l&&(e.frozen(!1),l(e.iri,!1,-1,-1))}})},s.setOntologyLayout=function(e){r=e},s.setSaveOntologyLayoutCallback=function(e){l=e},s.filteredNodes=function(){return a},s.filteredProperties=function(){return i},s.enabled=function(e){return arguments.length?(o=e,s):o},s}},77:function(e,t){e.exports=function(e,t,n,o){var a={};return a.selectNode=function(a){var i=e.getNode(a);if(void 0===i)return!1;i.frozen(!0);var r=o.width()/2-i.x,l=o.height()/2-i.y;e.move(r,l);var s=t.enabled();return t.enabled(!1),n.enabled(!1),o.selectionModules().forEach(function(e){e.handle(i)}),t.enabled(s),n.enabled(!0),e.updateStyle(),!0},a.selectProperty=function(t){var a=e.getProperty(t);if(void 0===a)return!1;var i=a.domain(),r=a.range();i.frozen(!0),r.frozen(!0);var l=Math.min(i.x,r.x)+Math.abs(i.x-r.x)/2,s=Math.min(i.y,r.y)+Math.abs(i.y-r.y)/2,l=o.width()/2-l,s=o.height()/2-s;return e.move(l,s),n.enabled(!1),o.selectionModules().forEach(function(e){e.handle(a)}),n.enabled(!0),e.updateStyle(),!0},a}}});