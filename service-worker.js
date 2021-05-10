/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","e78401c6ed591662b07a42789110989e"],["assets/css/style.min.css","23c42908a0ea1fe6aef185652e530bc2"],["assets/icon.png","ce58c1235e38d075c4cb46f1c95eecf6"],["assets/scss/style.scss","0081eed38c5eeeaa9da0cd11b8c21d46"],["index.html","174856b988084a56e1e537d87d08d42d"],["index.jade","4361e104f3de368c96ab4d9f1a67004e"],["manifest.json","1f3b41d8bd47205304e6122a4afe7fc2"],["node_modules/@types/jquery/JQuery.d.ts","773a5f914680f18bf40223b00f4c1588"],["node_modules/@types/jquery/JQueryStatic.d.ts","9ab19c42f4d25f9980044d30f8cb42e1"],["node_modules/@types/jquery/README.md","ffd5f4efb1cbcb6dfc3cd44e170dbcab"],["node_modules/@types/jquery/dist/jquery.slim.d.ts","16da9143fa7d00e535850c5f48be523a"],["node_modules/@types/jquery/index.d.ts","0e0713e6b7a17bafcf7d7180e8125d4f"],["node_modules/@types/jquery/legacy.d.ts","5f88e2273e35a828c5c9525a02789595"],["node_modules/@types/jquery/misc.d.ts","09fd0d62d07bb4449a78b7d5aa7fd94b"],["node_modules/@types/jquery/package.json","cd0887f6fa36a54681f453a15795ff3d"],["node_modules/@types/sizzle/README.md","e83a6e635c1da3d5c3cf0b86e1aa2db9"],["node_modules/@types/sizzle/index.d.ts","53bd49d41aaaf4813b26125faf825123"],["node_modules/@types/sizzle/package.json","0a4a9e61e3d4f25f8b37deabb4155173"],["node_modules/acorn-globals/README.md","19a996b1832189ad957a2393cbe87f6c"],["node_modules/acorn-globals/index.js","509b72705adc4b344adc158800073935"],["node_modules/acorn-globals/package.json","4d86a101815f3cbde6d739d55ec8347e"],["node_modules/acorn/README.md","16c1fb10c9129518c18191304a270dea"],["node_modules/acorn/bin/build-acorn.js","18978d9e2e80aeb8af9f41b0f405a52f"],["node_modules/acorn/bin/generate-identifier-regex.js","c32839151606b416574df0bdf33d08af"],["node_modules/acorn/bin/update_authors.sh","fd950836807fa2c7d27869b44014d8fa"],["node_modules/acorn/dist/acorn.js","be5a9595100cfa481c30216157b46c2e"],["node_modules/acorn/dist/acorn_loose.js","a1093e8c9136c7f93b69580270348ea8"],["node_modules/acorn/dist/walk.js","7485fe1470f86ee179b581e3e36e5637"],["node_modules/acorn/package.json","b5c1b0a9ee62fa19163d0dab8e9a5043"],["node_modules/acorn/src/bin/acorn.js","dc3f8b082c7c6aa65007c3d422b095e9"],["node_modules/acorn/src/expression.js","a113659ab909f1b7fddca8b4c8d41ecb"],["node_modules/acorn/src/identifier.js","d3d9b4b3cddd9f12f3c0857d3d64de65"],["node_modules/acorn/src/index.js","b7e8a41e3ac99d9184d95285b78d3a17"],["node_modules/acorn/src/location.js","aa644ecb15f12770a94daecc38561cef"],["node_modules/acorn/src/locutil.js","ef7cb01acfacdee4faf6beb65ad37efc"],["node_modules/acorn/src/loose/acorn_loose.js","d41d8cd98f00b204e9800998ecf8427e"],["node_modules/acorn/src/loose/expression.js","b9144ca42afb4abe379f79049dd2b586"],["node_modules/acorn/src/loose/index.js","3bca3246bdee3c0eb56bd9300e2d60c8"],["node_modules/acorn/src/loose/parseutil.js","35166ca3d52bd545495ffbfd1818f623"],["node_modules/acorn/src/loose/state.js","46aa6b9e9c8ff6240b5cf5cd73f6b1bb"],["node_modules/acorn/src/loose/statement.js","0a1d95c6d59b2e894e79cdf61c2cd3c9"],["node_modules/acorn/src/loose/tokenize.js","bfa3612299ebe580abea2ea70e5b90cd"],["node_modules/acorn/src/lval.js","a32981046dab882b9e00dce253a22e0b"],["node_modules/acorn/src/node.js","520349e4111736a0714db85eea9a78ce"],["node_modules/acorn/src/options.js","31e0fc8b1eead97f2a5309cb12988387"],["node_modules/acorn/src/parseutil.js","bcc77f1cb5be11fd7f2f4c20d7c11b9a"],["node_modules/acorn/src/state.js","ce139299b723bfccbe96d698668dee11"],["node_modules/acorn/src/statement.js","cfc7d7fc3fd2f00e82405a45ef5295c5"],["node_modules/acorn/src/tokencontext.js","c14158f000bf02f9c718844d9803adb3"],["node_modules/acorn/src/tokenize.js","853ef3483cafac64f3b9d350eea55382"],["node_modules/acorn/src/tokentype.js","9982c219236341dc5bd3cd528194808f"],["node_modules/acorn/src/util.js","2f90748d9bf75304e0163c66822b5603"],["node_modules/acorn/src/walk/index.js","a2fd58d9e1a4307f996830f949a00044"],["node_modules/acorn/src/whitespace.js","7470b5b4107c3a276a7482416843b312"],["node_modules/align-text/README.md","287156d400786e2c18daed8d86214257"],["node_modules/align-text/index.js","c90afbbae728aeefd3628fe5f9e0779e"],["node_modules/align-text/package.json","cbb9fd41c3a59b0c0aa317962dad3108"],["node_modules/amdefine/README.md","fb4e48bf5357880ee50d3ad4b50e51ba"],["node_modules/amdefine/amdefine.js","f07f1590c4a38833776dbb3566144104"],["node_modules/amdefine/intercept.js","9a3dda7a13d0e972a7564ccec83c36ef"],["node_modules/amdefine/package.json","059d397ccb855270d4e87d47166c0bb9"],["node_modules/asap/LICENSE.md","43ea6e1f1982d4a15dc9affc237faf2c"],["node_modules/asap/README.md","8737429d836a281b5f2132fa502238c0"],["node_modules/asap/asap.js","ee9c63916da44b0208b9583cf62837d8"],["node_modules/asap/package.json","c6b43a85d75f3b9723f50a00cd4f0fae"],["node_modules/camelcase/index.js","a54880edac7c4a1c5468f9932d18ed2d"],["node_modules/camelcase/package.json","3b29afcaab869ac51a45930663385cfe"],["node_modules/camelcase/readme.md","df8609d24a87a1e2f367510d9cb57383"],["node_modules/center-align/README.md","4ebb49c811e34cff3af41de81362e8eb"],["node_modules/center-align/index.js","8653353875e2a26ba0282e11650288ea"],["node_modules/center-align/package.json","2ff6c84652b1c10250006e8492b887aa"],["node_modules/center-align/utils.js","364cc21e2594d2cc085bd2c6e37aea18"],["node_modules/character-parser/README.md","7a9ef08e8f6fc2e48963c0733a256f17"],["node_modules/character-parser/index.js","a2779af8c542095d375e38409c9413d4"],["node_modules/character-parser/package.json","5dc60386722b9dcaa4f074787a931c4c"],["node_modules/clean-css/History.md","3627ef24a76e2d04e6481b3172fa2f7c"],["node_modules/clean-css/README.md","e6e1d15aa9dbc5b9b15c7d458a03469a"],["node_modules/clean-css/index.js","ed3e72ab315c980facbfd0871a848008"],["node_modules/clean-css/lib/clean.js","3fd032b896c07de0551a861845deb888"],["node_modules/clean-css/lib/colors/hex-name-shortener.js","f0e32bfae432d1055df682f6aaf1c779"],["node_modules/clean-css/lib/colors/hsl.js","3fd469d658f7538d419067ec0e8355d6"],["node_modules/clean-css/lib/colors/rgb.js","4a89632380308b6188cad3c3e32d4fd9"],["node_modules/clean-css/lib/imports/inliner.js","de9367e290e335a39cf3e85000563ed5"],["node_modules/clean-css/lib/properties/break-up.js","b02b24f2b2a4e3bd028f0103fca8ef1e"],["node_modules/clean-css/lib/properties/can-override.js","2f9bedd3d6aa4181501bb7586772380f"],["node_modules/clean-css/lib/properties/clone.js","b3fb621ecbb22c398ffd59d33b8b4a14"],["node_modules/clean-css/lib/properties/compactable.js","65fb53ba80b98fc737e8a513421e9d7d"],["node_modules/clean-css/lib/properties/every-combination.js","f764ac59915ce5d774da7b5fc76c41f3"],["node_modules/clean-css/lib/properties/has-inherit.js","0da4f6c90d9a4458ed3e8ec8ac580bdf"],["node_modules/clean-css/lib/properties/invalid-property-error.js","97128234cb48c614935970bfb05affc8"],["node_modules/clean-css/lib/properties/optimizer.js","0ff3b2ce9cf5e77a1c9c28236fc5c37f"],["node_modules/clean-css/lib/properties/override-compactor.js","1fcb7742580d4458e28f9ddb35b3fd4d"],["node_modules/clean-css/lib/properties/populate-components.js","1d444d65e946d30a94d3457401514a14"],["node_modules/clean-css/lib/properties/remove-unused.js","453ef6a6ed201abdf4fd527e19c27a19"],["node_modules/clean-css/lib/properties/restore-from-optimizing.js","b40118f9e1bd19acb2a463af3e8730cf"],["node_modules/clean-css/lib/properties/restore.js","84d99481317c6efce5cb18320eabf213"],["node_modules/clean-css/lib/properties/shorthand-compactor.js","8a8cbe63ca6565e4826cbad9ba821dcf"],["node_modules/clean-css/lib/properties/validator.js","54c5d9e7fc2f9dcf174ea51818ac34d2"],["node_modules/clean-css/lib/properties/vendor-prefixes.js","93a51b76210a4709082eb1d555242547"],["node_modules/clean-css/lib/properties/wrap-for-optimizing.js","86b67c027d480454007312870da053c0"],["node_modules/clean-css/lib/selectors/advanced.js","bc828f034de882223f749ae952909445"],["node_modules/clean-css/lib/selectors/clean-up.js","12813a038b9a152a48de8e4f0bfd3f0f"],["node_modules/clean-css/lib/selectors/extractor.js","7136ab26bebeccb0e2b6eeacabff8d28"],["node_modules/clean-css/lib/selectors/is-special.js","555610c657a2d0aa33f07ed4b41d3df3"],["node_modules/clean-css/lib/selectors/merge-adjacent.js","01db260dc9e4df73c3749a3be947f5ba"],["node_modules/clean-css/lib/selectors/merge-media-queries.js","22a9780f0c03d200bf91d48fbf5211cc"],["node_modules/clean-css/lib/selectors/merge-non-adjacent-by-body.js","3b0ab3d533fbb67f3b75d07dd4cfd01b"],["node_modules/clean-css/lib/selectors/merge-non-adjacent-by-selector.js","43d8a7aa65897eb373091b1778c8d43b"],["node_modules/clean-css/lib/selectors/reduce-non-adjacent.js","8282cc6cd706598c6fd435e0198297a0"],["node_modules/clean-css/lib/selectors/remove-duplicate-media-queries.js","c58b6fa5d7ef47d7f0c711472f8abb50"],["node_modules/clean-css/lib/selectors/remove-duplicates.js","9467917e0d5b7861ef7c1e8025e266c5"],["node_modules/clean-css/lib/selectors/reorderable.js","c4293e34d95f3f22d239485758698840"],["node_modules/clean-css/lib/selectors/restructure.js","5045d44426854894c5913652f40789cb"],["node_modules/clean-css/lib/selectors/simple.js","6fd15ac56755be037bee9ba07c033c0d"],["node_modules/clean-css/lib/source-maps/track.js","ced0420622542407d1cb0d03f068b231"],["node_modules/clean-css/lib/stringifier/helpers.js","d2f87314d6791e4d9f3a29302e0d3440"],["node_modules/clean-css/lib/stringifier/one-time.js","e66f558eafe77f9728b7986992d4102f"],["node_modules/clean-css/lib/stringifier/simple.js","c9d42619ade76c436da411819a5b069f"],["node_modules/clean-css/lib/stringifier/source-maps.js","4778c4873772af90c9062acb4d6cbe1f"],["node_modules/clean-css/lib/text/comments-processor.js","382a040d23899d73ed7345e63a87eff5"],["node_modules/clean-css/lib/text/escape-store.js","13107e06e117afb1f03dd22e481fec53"],["node_modules/clean-css/lib/text/expressions-processor.js","2b3b2efe96998dc4c5163584f9c81125"],["node_modules/clean-css/lib/text/free-text-processor.js","7be48e2fa2d60c1776ce7ecd9c4fd61a"],["node_modules/clean-css/lib/text/urls-processor.js","bc3e796008fa08d79cddcb863932d75c"],["node_modules/clean-css/lib/tokenizer/extract-properties.js","521abb67a905a2295285d00a3c7f58bd"],["node_modules/clean-css/lib/tokenizer/extract-selectors.js","1a5ece7be92fc4728916defe8c18a716"],["node_modules/clean-css/lib/tokenizer/tokenize.js","f7552de8ab9245baecbc11ada0b51f66"],["node_modules/clean-css/lib/urls/rebase.js","0aa8a806e795ab5631a4304f81388f4a"],["node_modules/clean-css/lib/urls/reduce.js","8ccec7b62c175e9eb3781a9a4fdb7064"],["node_modules/clean-css/lib/urls/rewrite.js","efa00ee0cb061f447bfe031fbf2a439e"],["node_modules/clean-css/lib/utils/clone-array.js","e03e852790b22134c2933a9eaf3f0b6b"],["node_modules/clean-css/lib/utils/compatibility.js","7c46e4e2c5970079f918d07a724a7096"],["node_modules/clean-css/lib/utils/input-source-map-tracker.js","9f972cff51aafbc96ec561383053ab57"],["node_modules/clean-css/lib/utils/object.js","5364bfb9836497487ec0f83a0c89b726"],["node_modules/clean-css/lib/utils/quote-scanner.js","b18558a37d45435339212fb1f86b3770"],["node_modules/clean-css/lib/utils/source-reader.js","64bb8438961faf01ff69fd7b4fc6d4b7"],["node_modules/clean-css/lib/utils/source-tracker.js","681e85b5d315d7fbdbbc80c67cd33b8c"],["node_modules/clean-css/lib/utils/split.js","9f0f6c12cd3e37ab70ae351ea5d69f6a"],["node_modules/clean-css/node_modules/commander/History.md","754dfb4f1c86ff26924a44aeb79dcff1"],["node_modules/clean-css/node_modules/commander/Readme.md","05b13099274097e2456e63a77d877086"],["node_modules/clean-css/node_modules/commander/index.js","78f85c7f9d98dabbe600b75a3fdce704"],["node_modules/clean-css/node_modules/commander/package.json","1f4fd544e658b395390cf19f3790167e"],["node_modules/clean-css/package.json","c883b1c6f30e8dfa046ac438a32ecb5c"],["node_modules/cliui/LICENSE.txt","83623193d3051ca8068a89a455c699ca"],["node_modules/cliui/README.md","678fa0144b90610cd0b91f3991142578"],["node_modules/cliui/index.js","15312c831b943804b6034b1427a5e76a"],["node_modules/cliui/package.json","6edea79136a7c59bae025c331e032ee8"],["node_modules/cliui/test/cliui.js","443ddffc7da0d7c0539c1d21997e84ec"],["node_modules/commander/History.md","d99b3c2dc4e6ba7f5e826af621509b42"],["node_modules/commander/Readme.md","d97b3249f86e7675190905e13991e95a"],["node_modules/commander/index.js","8784070c686c2f52a0f09ca9b8db3934"],["node_modules/commander/package.json","6214ab6d05649f4edf936b07649b6a57"],["node_modules/constantinople/README.md","48f78261968af6361c95f19b613e351a"],["node_modules/constantinople/index.js","495e88f7997ffe2267bbfeb045fc1d1b"],["node_modules/constantinople/package.json","754d2d6de7664754cd6e56b3cd9d5ef9"],["node_modules/constantinople/test/index.js","bdf0fc5f2dcebfbf429176894699a747"],["node_modules/css-parse/History.md","b973ea8aea19b6f055c019bba80cb211"],["node_modules/css-parse/Readme.md","6331bdd7b365babb92d44171d84067ef"],["node_modules/css-parse/component.json","eb5547436e824ac6d3fef5badc80214b"],["node_modules/css-parse/index.js","60bf331540ba8f6a1c2565016a00aec2"],["node_modules/css-parse/package.json","e7fe81126171290d0e2350ace8bc7a3e"],["node_modules/css-stringify/History.md","b37f86a9eb54ce690b88d35b2e1fe89a"],["node_modules/css-stringify/Readme.md","e62153a0cd746f6fa4d7d8dadf584de9"],["node_modules/css-stringify/component.json","0448f16e3423734fbd854cd53761c1ba"],["node_modules/css-stringify/index.js","d2a67e821db457a307188c4333707f55"],["node_modules/css-stringify/package.json","aa8bdc32cab92827cbdf06ec2ac6477a"],["node_modules/css/History.md","7eaac8256dee569d514d80cbed7714b2"],["node_modules/css/Readme.md","68666abdf2a741cca5a6785c9651a48b"],["node_modules/css/benchmark.js","ec316b60651a883d1201b4e214120c72"],["node_modules/css/component.json","2505d6456b808aae420a697e6292fdcd"],["node_modules/css/index.js","e89ef8e6e2b7bfcb793b59d07ece47d4"],["node_modules/css/package.json","b38b4a012f850b5bec45a54fd388ae44"],["node_modules/css/test.js","de30f9a9985151ae6a544410d80a8698"],["node_modules/decamelize/index.js","983084e6146528df1707b0aa3ff6cd9a"],["node_modules/decamelize/package.json","494b4faeb16e12979e988b49de7684d6"],["node_modules/decamelize/readme.md","71b1684a019e2f3d5cc76429939db237"],["node_modules/graceful-readlink/README.md","b9904d50144e42cef045e8b61edda5ca"],["node_modules/graceful-readlink/index.js","41da23167bf209c4e54cad707466a1ac"],["node_modules/graceful-readlink/package.json","f881aaad9fe682764eae2e89914e858a"],["node_modules/is-buffer/README.md","058bbbb6225d8b0bcd7246e88b1ad1b4"],["node_modules/is-buffer/index.js","13a96e186be0ce35ee2b3187b4d37f4a"],["node_modules/is-buffer/package.json","b5faa5fac071732491a62f6168f3bae6"],["node_modules/is-buffer/test/basic.js","5a4cc1407050a986c238daf56ba4b60d"],["node_modules/is-promise/index.js","7eb7518be7b9046ac35afcdc1d67d66d"],["node_modules/is-promise/index.mjs","262eb91ea3088c4c35a107b09be0dc24"],["node_modules/is-promise/package.json","f3803c28a2708c0c03cd1ddd47166fd2"],["node_modules/is-promise/readme.md","79fee08ffac2203ab69c411c0a6a23a0"],["node_modules/jade/History.md","4307e766571aff49be55824419720fb4"],["node_modules/jade/README.md","73786631e224f751b2501504834e43f0"],["node_modules/jade/Readme_zh-cn.md","dd41fb2dcfdeab292b99c371fc510694"],["node_modules/jade/bin/jade.js","a52eed6898763ce10c8f34c0bfde855a"],["node_modules/jade/block-code.html","d41d8cd98f00b204e9800998ecf8427e"],["node_modules/jade/component.json","3d3e78d6ee25632bffc8dd60c5f269f5"],["node_modules/jade/jade.js","8456df10cf150859df7ff40be4bc0ec0"],["node_modules/jade/lib/compiler.js","71af7a02f37da25af9692dcbbaaa87ba"],["node_modules/jade/lib/doctypes.js","d4b1201bf844b81c8cbfb464ab5471a2"],["node_modules/jade/lib/filters-client.js","ad34d456c95d01d95e7d3e5078e23872"],["node_modules/jade/lib/filters.js","d52bcf0e4649106dfb98ed6164f8900b"],["node_modules/jade/lib/index.js","4de76752271e5b1bae5a4194bca6b117"],["node_modules/jade/lib/inline-tags.js","68d6857249f6143b29a0980e4691b9d3"],["node_modules/jade/lib/lexer.js","f5521cf7ba2f94efdf99908cc47656e7"],["node_modules/jade/lib/nodes/attrs.js","651df2f7d30e1f59005a3ed984f148b1"],["node_modules/jade/lib/nodes/block-comment.js","98d8138c1e6f9599308fb72f28a5ad9a"],["node_modules/jade/lib/nodes/block.js","ca1413fecd64d7414af515dabdad6ed8"],["node_modules/jade/lib/nodes/case.js","f014e0c3ce508624909cacf7be27179a"],["node_modules/jade/lib/nodes/code.js","7da50ef624921509431c1ecc700467db"],["node_modules/jade/lib/nodes/comment.js","3d82b077d578658397419ffe97436b3c"],["node_modules/jade/lib/nodes/doctype.js","15511ac272f907af3d34b0721552a32e"],["node_modules/jade/lib/nodes/each.js","2543cfd3a0b4eb6956ac30cf38a5482f"],["node_modules/jade/lib/nodes/filter.js","8e40539ea1e4d42068127f3822342078"],["node_modules/jade/lib/nodes/index.js","7d984c4f11efd586bfba431cbbb48832"],["node_modules/jade/lib/nodes/literal.js","97c322c20e17598603fae994f02a2cbc"],["node_modules/jade/lib/nodes/mixin-block.js","e89449505fcebfa244c226b21d52aa76"],["node_modules/jade/lib/nodes/mixin.js","7e47edddb602dee61872c327d6531eda"],["node_modules/jade/lib/nodes/node.js","92729752076d04689673ec19d59f9cd6"],["node_modules/jade/lib/nodes/tag.js","3601cc8239cc26435d54bc0423a01767"],["node_modules/jade/lib/nodes/text.js","6a950468ea9b280a6c7ef75b8b418731"],["node_modules/jade/lib/parser.js","72dc3594779a3c1f50fb5e288944e3ce"],["node_modules/jade/lib/runtime.js","91f7590b386633da67d01facccead62c"],["node_modules/jade/lib/utils.js","77fa835cc2928f9c66cdd728cace56e3"],["node_modules/jade/package.json","d75280de2a1a47307d8d2641400d55a4"],["node_modules/jade/release.js","18458881372315050974c39a9465694d"],["node_modules/jade/runtime.js","2a0eb3480991e8458fa6da469774bd78"],["node_modules/jstransformer/README.md","23a271c934ffd8e65a3c3f69bf18ab02"],["node_modules/jstransformer/index.js","d29be345ef4b93ce29f8460e1c6ff595"],["node_modules/jstransformer/package.json","b4e50ae58c57d14c3f2e5d69f30ffcad"],["node_modules/kind-of/README.md","9717d312afd265b51dbc233a8e2d31d9"],["node_modules/kind-of/index.js","974e0c2803e83c5bf65de52b98bf4f55"],["node_modules/kind-of/package.json","d84b75e29c05c3a566bdfd6c768cebc8"],["node_modules/lazy-cache/README.md","a13997da9042d38d73704db5ff076cb4"],["node_modules/lazy-cache/index.js","403899881bd8b4a8ab7e8b36a56024f2"],["node_modules/lazy-cache/package.json","59655c9c0619e61064839f9bfd2ded02"],["node_modules/longest/README.md","f8e2c5378fab44016468fded33e52390"],["node_modules/longest/index.js","14539a2cf27890937f0176b341fe3727"],["node_modules/longest/package.json","4b5c38574ff91b85b13fe428703b8463"],["node_modules/minimist/example/parse.js","ec61a2f24b121c24aa91fe3e63816652"],["node_modules/minimist/index.js","2119e80ea083f018b35c479d064ab598"],["node_modules/minimist/package.json","84505571ecc56b8071068f44de7c79b2"],["node_modules/minimist/readme.markdown","d9f38584d91893b56b49dd9e7b99617b"],["node_modules/minimist/test/all_bool.js","0996869b339f45a72669d8638df020d3"],["node_modules/minimist/test/bool.js","ae6a97ef56e0da40b68451a34869fca2"],["node_modules/minimist/test/dash.js","3912e17dca100d50c1bab4c7982d56dc"],["node_modules/minimist/test/default_bool.js","d97a3688462e13a7399204b153426be8"],["node_modules/minimist/test/dotted.js","16f59760e45e2cf7f835320635d59ce1"],["node_modules/minimist/test/kv_short.js","74c72f03ca3283bacd95ce6019fcd1e8"],["node_modules/minimist/test/long.js","652e865e69ae41e78d9ad95f8557f0a2"],["node_modules/minimist/test/num.js","3c6b959c2a952ca471797e28723fa8c5"],["node_modules/minimist/test/parse.js","466b0207dd29b19eefe9aff973472fb5"],["node_modules/minimist/test/parse_modified.js","d04f05190e5720bb1fb47be8f09f96d8"],["node_modules/minimist/test/proto.js","268100e3c4f26f735766cf5fd729ef61"],["node_modules/minimist/test/short.js","a964fe2c657d6e71d1c3a2c8bc5ce79c"],["node_modules/minimist/test/stop_early.js","20dfd44d3acf4d24e21fa04c24841580"],["node_modules/minimist/test/unknown.js","68487dbf5d4323c19185167877da8736"],["node_modules/minimist/test/whitespace.js","caa1c589b42a96804176247191ccb980"],["node_modules/mkdirp/bin/cmd.js","9ef5fb33a1a94773afb7dc52b0dfbb5d"],["node_modules/mkdirp/bin/usage.txt","29298f0efcb0c0454a851886b91e00e2"],["node_modules/mkdirp/index.js","a59137b9f8824eb782e812809370c4ed"],["node_modules/mkdirp/package.json","3b5ba3c4a04a8b0520bd0d392cf1c48f"],["node_modules/mkdirp/readme.markdown","dfd7f97586f4e042de011b15014ec8cb"],["node_modules/optimist/example/bool.js","5da9ae85adb5a6f67d5ed4f79822fe2c"],["node_modules/optimist/example/boolean_double.js","95da79c3d832dc6c04327f34b1a76385"],["node_modules/optimist/example/boolean_single.js","02a1435cb39e0104c05bb3e4b5e99d70"],["node_modules/optimist/example/default_hash.js","2228ae81ff2b31a8a8cf5fac731cd714"],["node_modules/optimist/example/default_singles.js","a8a54e79ecc60604fdc86d073ebf5c1d"],["node_modules/optimist/example/divide.js","c0d0e8db7f3a9ff14170520370a45ff2"],["node_modules/optimist/example/line_count.js","96443a472f1f2b5253f8c0bf7b1c65f5"],["node_modules/optimist/example/line_count_options.js","ecc411cf359fb76148305b6e818a14e8"],["node_modules/optimist/example/line_count_wrap.js","0da84cd556912ddd220034dee43eee50"],["node_modules/optimist/example/nonopt.js","213ab56bfb097217dd36d9cbe0318d45"],["node_modules/optimist/example/reflect.js","df8697d2bc5c2d203ec4fb7a5fe76fe6"],["node_modules/optimist/example/short.js","a95b976d969c9cb23884c2d61e6e3e74"],["node_modules/optimist/example/string.js","0080630eb2558939999b1d92c17c0654"],["node_modules/optimist/example/usage-options.js","7e8302290bb434c244219d3f09fee52c"],["node_modules/optimist/example/xup.js","1e638374bbd2db1710b918ca5b31bc77"],["node_modules/optimist/index.js","34bc3acc97a0acc9f120845d87438e4e"],["node_modules/optimist/package.json","24cda805c90482e3caae7ffc5f082047"],["node_modules/optimist/readme.markdown","35810eecc5a2b7a085fa063b9eecebad"],["node_modules/optimist/test/_.js","03c59a828196ebde70153780bcfb922e"],["node_modules/optimist/test/_/argv.js","95fd102271b95902a352cbef9569c416"],["node_modules/optimist/test/_/bin.js","5bd4c06e3792233f3ef5e6db83481209"],["node_modules/optimist/test/parse.js","4cf4cbc680b5ca27955d2cb11511fe4a"],["node_modules/optimist/test/usage.js","ed9450d10124cb29e7e1a7100fda55c7"],["node_modules/promise/Readme.md","4f1beec22aed857f559882941fb60469"],["node_modules/promise/core.js","d44a2a76c635ed9cff3a557041adf44b"],["node_modules/promise/index.js","3fef9736f8cfc1679165a469fa91aba4"],["node_modules/promise/lib/core.js","4899b2f85cf2e7e8bb1e930c6247306b"],["node_modules/promise/lib/done.js","f8773370840f94285d4bfa77e32a651b"],["node_modules/promise/lib/es6-extensions.js","dc4422a0e3a066362e05545c001168de"],["node_modules/promise/lib/node-extensions.js","23f40ccb47dea5b193c405fe8caef4c5"],["node_modules/promise/package.json","931be2ee1cd894e71a3d4402b040e6f6"],["node_modules/promise/polyfill-done.js","2aa6873602fa230e0cb9abc6e79ac5ad"],["node_modules/promise/polyfill.js","ab6f76cb8424b491eb2b8f70b0bbe77b"],["node_modules/repeat-string/README.md","96ae96f4b3ce79313a574f25d891b4a6"],["node_modules/repeat-string/index.js","5f8c0fdde909e8211553a109f4441f69"],["node_modules/repeat-string/package.json","bc161704e452cf4ab0e6d92a3f93881c"],["node_modules/right-align/README.md","ac380a592a270791a091c609e9d2b1b6"],["node_modules/right-align/index.js","c81de29e4ef81b9b999bf24ac7fc92d7"],["node_modules/right-align/package.json","04b40a075247e03483d287dc5f762d3b"],["node_modules/source-map/README.md","a26e0aa38ec1e88db35149e7ca5ce2d0"],["node_modules/source-map/build/assert-shim.js","fb43247579b50f59d5e8eca0203e46b5"],["node_modules/source-map/build/mini-require.js","f30cc55c480ef50605092a45ac1e4aae"],["node_modules/source-map/build/prefix-source-map.jsm","097364fed5a2aa26bd692578bf2b76ee"],["node_modules/source-map/build/prefix-utils.jsm","6b6e9c6575ee839437d7e8765dcc23c6"],["node_modules/source-map/build/suffix-browser.js","4cf2367430a53d254957ce0b478bf856"],["node_modules/source-map/build/suffix-source-map.jsm","0142b291706909946a32c6816eb64be3"],["node_modules/source-map/build/suffix-utils.jsm","8a9543890ee5cdea5b00413a94bc456d"],["node_modules/source-map/build/test-prefix.js","d94883130c0846ee585eccd017427cf8"],["node_modules/source-map/build/test-suffix.js","b07e2f5a3187b87a715120a8e530dd17"],["node_modules/source-map/lib/source-map.js","e46e747972b2809f6b7845971a6de40d"],["node_modules/source-map/lib/source-map/array-set.js","cb99370c7f8a23363da25bf8c54a2b58"],["node_modules/source-map/lib/source-map/base64-vlq.js","ac55c1a0feecb1f079fffdb0cee72c62"],["node_modules/source-map/lib/source-map/base64.js","35b0279351b4525ebb8b98f27279af1e"],["node_modules/source-map/lib/source-map/binary-search.js","f6a94b30b093a21ae7ffb0287eeca88e"],["node_modules/source-map/lib/source-map/mapping-list.js","8c17f50182f34e8eb15a7c8706bc1a6e"],["node_modules/source-map/lib/source-map/quick-sort.js","cee536df9d0144dc9f16fe4774741f7b"],["node_modules/source-map/lib/source-map/source-map-consumer.js","b9f7bc47ecd9cf132488d097426aa33f"],["node_modules/source-map/lib/source-map/source-map-generator.js","0469dae5b37cb6196c13c8d30ec50750"],["node_modules/source-map/lib/source-map/source-node.js","9706cd9645bf494e633b8add03bf1469"],["node_modules/source-map/lib/source-map/util.js","0aa430dc215d326d6854aa4b560d0582"],["node_modules/source-map/package.json","a37d0f85efa1bcde9ed47e3f3babb78c"],["node_modules/transformers/README.md","1dc6b0856385e529f0dec668b306237f"],["node_modules/transformers/history.md","1e21ea26645f7061f29682ec181e8480"],["node_modules/transformers/lib/shared.js","113b616ab30d688e0c19cde6eeda558d"],["node_modules/transformers/lib/transformers.js","051804df896b3cef4dc359c71e8e76bb"],["node_modules/transformers/node_modules/is-promise/index.js","27f71a6b1fcc252669e447939fa984a7"],["node_modules/transformers/node_modules/is-promise/package.json","15ce5f03ba0a32e66f81b49d665a1f9c"],["node_modules/transformers/node_modules/is-promise/readme.md","23bc0ae30aa4681bd0026c567375a08f"],["node_modules/transformers/node_modules/promise/Readme.md","a868e03d2108be711337f0b0cb6e26ea"],["node_modules/transformers/node_modules/promise/index.js","ca218a11c5715fa0b5b3adc4cf098957"],["node_modules/transformers/node_modules/promise/package.json","486a3489a577d66d8650ece2bdddde86"],["node_modules/transformers/node_modules/source-map/CHANGELOG.md","2b4fc9b1c3d8cc879f4c8e052bdf649e"],["node_modules/transformers/node_modules/source-map/Makefile.dryice.js","2704605a978645b0c57e0aae26cbaca5"],["node_modules/transformers/node_modules/source-map/README.md","829a8e22a23c2cf64a8e429f2282b2e8"],["node_modules/transformers/node_modules/source-map/build/assert-shim.js","fb43247579b50f59d5e8eca0203e46b5"],["node_modules/transformers/node_modules/source-map/build/mini-require.js","f30cc55c480ef50605092a45ac1e4aae"],["node_modules/transformers/node_modules/source-map/build/prefix-source-map.jsm","2c0fb54223a6eda60f771bb54310b1d3"],["node_modules/transformers/node_modules/source-map/build/prefix-utils.jsm","6b6e9c6575ee839437d7e8765dcc23c6"],["node_modules/transformers/node_modules/source-map/build/suffix-browser.js","4cf2367430a53d254957ce0b478bf856"],["node_modules/transformers/node_modules/source-map/build/suffix-source-map.jsm","0142b291706909946a32c6816eb64be3"],["node_modules/transformers/node_modules/source-map/build/suffix-utils.jsm","8a9543890ee5cdea5b00413a94bc456d"],["node_modules/transformers/node_modules/source-map/build/test-prefix.js","d94883130c0846ee585eccd017427cf8"],["node_modules/transformers/node_modules/source-map/build/test-suffix.js","b07e2f5a3187b87a715120a8e530dd17"],["node_modules/transformers/node_modules/source-map/lib/source-map.js","e46e747972b2809f6b7845971a6de40d"],["node_modules/transformers/node_modules/source-map/lib/source-map/array-set.js","50f39490d125496c9b7df5174a09cda0"],["node_modules/transformers/node_modules/source-map/lib/source-map/base64-vlq.js","79d3684f49058264a195e5b2e7776e67"],["node_modules/transformers/node_modules/source-map/lib/source-map/base64.js","ee81bc58798f3570b08102f2b66e10f9"],["node_modules/transformers/node_modules/source-map/lib/source-map/binary-search.js","6ac6ace6c0414d31278796039035f139"],["node_modules/transformers/node_modules/source-map/lib/source-map/mapping-list.js","cc7a0ae29598226d0fe4fb4521e64ccf"],["node_modules/transformers/node_modules/source-map/lib/source-map/source-map-consumer.js","3df550293f43f9db162d3f5089dcb07c"],["node_modules/transformers/node_modules/source-map/lib/source-map/source-map-generator.js","0712341eda5dbfe9f52550086b6abb4a"],["node_modules/transformers/node_modules/source-map/lib/source-map/source-node.js","9706cd9645bf494e633b8add03bf1469"],["node_modules/transformers/node_modules/source-map/lib/source-map/util.js","9c2e56147fcd5b4391e8f6f82ba1f760"],["node_modules/transformers/node_modules/source-map/package.json","836f56323caacf148f7bcb92574bdf25"],["node_modules/transformers/node_modules/source-map/test/run-tests.js","3a0f1106f5577349c11080d5def5f33a"],["node_modules/transformers/node_modules/source-map/test/source-map/test-api.js","ed68bfdb84d3ebeb69381aed7e5da6a8"],["node_modules/transformers/node_modules/source-map/test/source-map/test-array-set.js","c6995fb9518ddf05e1aa4702ca70cd92"],["node_modules/transformers/node_modules/source-map/test/source-map/test-base64-vlq.js","cb9b00eb375ebfd510fb00b845583845"],["node_modules/transformers/node_modules/source-map/test/source-map/test-base64.js","c215be31703f4106de0369a9fac29565"],["node_modules/transformers/node_modules/source-map/test/source-map/test-binary-search.js","55f81671e648f665002e0d968d5f0b91"],["node_modules/transformers/node_modules/source-map/test/source-map/test-dog-fooding.js","2e84cdef47ff278aae19895f4b23b21f"],["node_modules/transformers/node_modules/source-map/test/source-map/test-source-map-consumer.js","baf3bbf92a32490d500c61cd6d2b4e62"],["node_modules/transformers/node_modules/source-map/test/source-map/test-source-map-generator.js","833e950e2ca96b980ecd8c51681ad621"],["node_modules/transformers/node_modules/source-map/test/source-map/test-source-node.js","84da71b9ae36bb3179ba4d05af1d33f7"],["node_modules/transformers/node_modules/source-map/test/source-map/test-util.js","771372e4c09dcbf55a65c860d225b3d2"],["node_modules/transformers/node_modules/source-map/test/source-map/util.js","aedd60c88659e2133e60f2e16c2afa8f"],["node_modules/transformers/node_modules/uglify-js/README.md","65c92a48375898899cc28e8b80fc448f"],["node_modules/transformers/node_modules/uglify-js/lib/ast.js","d4209baba75f13f9144b1fe67612a5de"],["node_modules/transformers/node_modules/uglify-js/lib/compress.js","f6d0c57a0dab42aa32d8c431333c6e02"],["node_modules/transformers/node_modules/uglify-js/lib/mozilla-ast.js","4a0faaae78359f7c48718adf19b5cde7"],["node_modules/transformers/node_modules/uglify-js/lib/output.js","a6450a716aea1cb4fa50a3420c497f99"],["node_modules/transformers/node_modules/uglify-js/lib/parse.js","00ae03b596be3e9488c7a217079e432a"],["node_modules/transformers/node_modules/uglify-js/lib/scope.js","2b1056964a8314e262af44cf148c350e"],["node_modules/transformers/node_modules/uglify-js/lib/sourcemap.js","7827b287a66c10800b5c1fec88886c25"],["node_modules/transformers/node_modules/uglify-js/lib/transform.js","6da9ca36e11f6bee7fd4c4fbe5a3e0e5"],["node_modules/transformers/node_modules/uglify-js/lib/utils.js","05c266ae8f471fb638b4c6da5108275c"],["node_modules/transformers/node_modules/uglify-js/package.json","905c9258851135e38cdf58d504e0b409"],["node_modules/transformers/node_modules/uglify-js/test/compress/arrays.js","d180132797eee9bf29ed6c37dbdc4c70"],["node_modules/transformers/node_modules/uglify-js/test/compress/blocks.js","6edfa5ebad498edb14630d93e41083ec"],["node_modules/transformers/node_modules/uglify-js/test/compress/conditionals.js","78c9b224a3dbad5a5311a4e718df39d6"],["node_modules/transformers/node_modules/uglify-js/test/compress/dead-code.js","0f9f5e320b72ef0d13a0dac910753a6f"],["node_modules/transformers/node_modules/uglify-js/test/compress/debugger.js","788cc066eba58446ba86b3439b55d21e"],["node_modules/transformers/node_modules/uglify-js/test/compress/drop-unused.js","022bfe47e7daff5f6691f647fe2d43e9"],["node_modules/transformers/node_modules/uglify-js/test/compress/issue-105.js","7c2240eaf89d4e40ef6bd4558de9ffa4"],["node_modules/transformers/node_modules/uglify-js/test/compress/issue-12.js","92f2d57afccbf2e08020c87d652841a1"],["node_modules/transformers/node_modules/uglify-js/test/compress/issue-22.js","058e68d3cd021f4e1a41c4265abf16aa"],["node_modules/transformers/node_modules/uglify-js/test/compress/issue-44.js","5812056b3aeda16131616b0bac7572a0"],["node_modules/transformers/node_modules/uglify-js/test/compress/issue-59.js","4e447a6e5ba289aaad892ab77c8e4945"],["node_modules/transformers/node_modules/uglify-js/test/compress/labels.js","ee9d1d385a5a975223c063ba8afe7685"],["node_modules/transformers/node_modules/uglify-js/test/compress/loops.js","7cc17171845050ebfb4d9ae7e7f78526"],["node_modules/transformers/node_modules/uglify-js/test/compress/properties.js","97a783f383d86e3bedbd17337b998dcd"],["node_modules/transformers/node_modules/uglify-js/test/compress/sequences.js","53f50855008034d808c84ee48c106b98"],["node_modules/transformers/node_modules/uglify-js/test/compress/switch.js","25a0a9eff665db53af73a2334c870ff4"],["node_modules/transformers/node_modules/uglify-js/test/run-tests.js","944780974d2ac2fb9fbfbb3ebe53e131"],["node_modules/transformers/node_modules/uglify-js/tools/node.js","d8a5c766ee7ec3e605ef4701a1fab4c6"],["node_modules/transformers/package.json","1d8963a66cbd329e12084e370343e22b"],["node_modules/uglify-js/README.md","05159e624682d0aeaff59dd6b8cec616"],["node_modules/uglify-js/bin/extract-props.js","b5d5ee0515ed1316429c97606744fa2b"],["node_modules/uglify-js/lib/ast.js","011e6aab7419aefbe7bb5c6ad6f6bd1e"],["node_modules/uglify-js/lib/compress.js","af5c24fd09f3d87cd3b7b3a9e4a4174a"],["node_modules/uglify-js/lib/mozilla-ast.js","769d264a46ecf59c42cfac0f2a46c6a4"],["node_modules/uglify-js/lib/output.js","e4cfe75f6c2c38d4b7da737ed817a3be"],["node_modules/uglify-js/lib/parse.js","a4913595829c704fc04ca49a6a763a2b"],["node_modules/uglify-js/lib/propmangle.js","86420c0eaaf91a22120a5c0fb0406de6"],["node_modules/uglify-js/lib/scope.js","a27691dc74f6d185204bb920f03a53e2"],["node_modules/uglify-js/lib/sourcemap.js","3660da26e2c584b20804a6e2c444c470"],["node_modules/uglify-js/lib/transform.js","7a631f991a192d5eed60bf1075f9693b"],["node_modules/uglify-js/lib/utils.js","2a85314cd2c3d1927456357bec3ca00e"],["node_modules/uglify-js/node_modules/source-map/CHANGELOG.md","a3af94376054cec4d2e6fdcf2831d7e0"],["node_modules/uglify-js/node_modules/source-map/README.md","2b6d24c48eb012c450c789488f54526c"],["node_modules/uglify-js/node_modules/source-map/dist/source-map.debug.js","28a7e11ae114c7f74df596ab15f63a6e"],["node_modules/uglify-js/node_modules/source-map/dist/source-map.js","c6221a16383e3caf16ac3649e10f8476"],["node_modules/uglify-js/node_modules/source-map/dist/source-map.min.js","293cc6200400907b8c8b9c8fd04f1df5"],["node_modules/uglify-js/node_modules/source-map/dist/source-map.min.js.map","bad0956742f61dd379ab5c90dc1b26c9"],["node_modules/uglify-js/node_modules/source-map/lib/array-set.js","e409c2198743fb3f9c3e5939358bc32e"],["node_modules/uglify-js/node_modules/source-map/lib/base64-vlq.js","10ab2672fb7feaa6e4a2ca651d2412f9"],["node_modules/uglify-js/node_modules/source-map/lib/base64.js","d6ba9a233e14b859b51f538c0b295953"],["node_modules/uglify-js/node_modules/source-map/lib/binary-search.js","250315731532fce9f782a6dcc6a0f569"],["node_modules/uglify-js/node_modules/source-map/lib/mapping-list.js","b43d49bb65a0e89b26e13a97de816cad"],["node_modules/uglify-js/node_modules/source-map/lib/quick-sort.js","dfeffc75906e8f42d235a55801ae2a42"],["node_modules/uglify-js/node_modules/source-map/lib/source-map-consumer.js","7c554dd02418736eadec52587fc657f9"],["node_modules/uglify-js/node_modules/source-map/lib/source-map-generator.js","4d5a791f716a350dc5c4cdd7d1ccb0b9"],["node_modules/uglify-js/node_modules/source-map/lib/source-node.js","5a5f0f5589bd9d1b83c9e24a15174260"],["node_modules/uglify-js/node_modules/source-map/lib/util.js","ec9ae29400d07c9b1266bc612acda893"],["node_modules/uglify-js/node_modules/source-map/package.json","7d1d048f81843bb704a2c69b3bcf3018"],["node_modules/uglify-js/node_modules/source-map/source-map.js","1bb9c1d35d2fbb3779c67306ca3d8070"],["node_modules/uglify-js/package.json","d699ed8b9f38275ac2b83aff3dd32f65"],["node_modules/uglify-js/tools/domprops.json","9180f044c8f725b624b4fd6611a8707a"],["node_modules/uglify-js/tools/exports.js","39596220c84f06123cd30bf79799c4bb"],["node_modules/uglify-js/tools/node.js","3c5527690babf7bd92d90af807bef296"],["node_modules/uglify-js/tools/props.html","3d2296edf2b290065052d13607789002"],["node_modules/uglify-to-browserify/README.md","3b7a77da18e8002ff9fb0f52f9051e8f"],["node_modules/uglify-to-browserify/index.js","2d988bce415093fc3e0c1def8d07cf63"],["node_modules/uglify-to-browserify/package.json","964a1f9e4812b70aa4bf3ba7bf4bf2ca"],["node_modules/uglify-to-browserify/test/index.js","49eebadd33751cb77024719beb261fb4"],["node_modules/void-elements/README.md","c6c169b9305b20810b27bb616a5930f7"],["node_modules/void-elements/index.js","9853b42004404b322df34779dcd82aba"],["node_modules/void-elements/package.json","740192482db17ff12a9e2e77394f86c6"],["node_modules/void-elements/pre-publish.js","51901b4c67a4e4ede2d873080bb0f525"],["node_modules/void-elements/test/index.js","eda116eb232fb1be00a3fc5ded035295"],["node_modules/window-size/README.md","a546edcf254635a0c3e06d4daf3aa44a"],["node_modules/window-size/index.js","676ffee450ebd4c253886ef72e33a32e"],["node_modules/window-size/package.json","e110050bade490e008cc25568d82a685"],["node_modules/with/README.md","f44297f11d48c009686a9a8da014d7d9"],["node_modules/with/index.js","8131963c77d8a2af1fc4dc491f7e7ac5"],["node_modules/with/node_modules/acorn/README.md","197bc5067801f1707d4576f7969ed703"],["node_modules/with/node_modules/acorn/bin/build-acorn.js","1eae45c5cf3183d64f6fa8df1627ef72"],["node_modules/with/node_modules/acorn/bin/generate-identifier-regex.js","c32839151606b416574df0bdf33d08af"],["node_modules/with/node_modules/acorn/bin/prepublish.sh","db785742ba0821636574502113a8b4b0"],["node_modules/with/node_modules/acorn/bin/update_authors.sh","fd950836807fa2c7d27869b44014d8fa"],["node_modules/with/node_modules/acorn/dist/acorn.js","c2689cf92096300305dcceb08f33cea3"],["node_modules/with/node_modules/acorn/dist/acorn_csp.js","a8e4177e32ab402789987e834c7ab738"],["node_modules/with/node_modules/acorn/dist/acorn_loose.js","bdca082d21e52d2058dd400cbcad460d"],["node_modules/with/node_modules/acorn/dist/walk.js","dee57a73d21aa65c30c7540ba7e0457f"],["node_modules/with/node_modules/acorn/package.json","a3991c59d2e355d393dae5bf05037cd8"],["node_modules/with/node_modules/acorn/src/expression.js","e127c003d719cd2a84bdaedd25141041"],["node_modules/with/node_modules/acorn/src/identifier.js","0759866f84677d2489377e136238399a"],["node_modules/with/node_modules/acorn/src/index.js","5c0f850f21ade60dcd41048a93fc0fad"],["node_modules/with/node_modules/acorn/src/location.js","85a1ee8dadbe63a8b4f2ef4ac445ec56"],["node_modules/with/node_modules/acorn/src/loose/acorn_loose.js","d41d8cd98f00b204e9800998ecf8427e"],["node_modules/with/node_modules/acorn/src/loose/expression.js","96e770514764b425643d4438c9437949"],["node_modules/with/node_modules/acorn/src/loose/index.js","e59f1b40bd0cf9b63a1a81dbb76fd67f"],["node_modules/with/node_modules/acorn/src/loose/parseutil.js","f8a7297831baf04e5cc8ec56b2f232e1"],["node_modules/with/node_modules/acorn/src/loose/state.js","b31a34793184e160dcee47da2c55c081"],["node_modules/with/node_modules/acorn/src/loose/statement.js","a5c836241d4a52c97b0984a1a4e84091"],["node_modules/with/node_modules/acorn/src/loose/tokenize.js","bfa3612299ebe580abea2ea70e5b90cd"],["node_modules/with/node_modules/acorn/src/lval.js","0327cc42fdaa8840d82522ed7fac9421"],["node_modules/with/node_modules/acorn/src/node.js","5ddea24bdc517007ea209afd8de4d694"],["node_modules/with/node_modules/acorn/src/options.js","78f14915836de47f944f973eab32577f"],["node_modules/with/node_modules/acorn/src/parseutil.js","a973ccf4a7c41f24c7030f335a9818e1"],["node_modules/with/node_modules/acorn/src/state.js","709fac08525d48407959d92f8aedddab"],["node_modules/with/node_modules/acorn/src/statement.js","6d1f5bc0a7fd352a4269e661b77a2f88"],["node_modules/with/node_modules/acorn/src/tokencontext.js","418540a2d5475b1bb061674d50315eab"],["node_modules/with/node_modules/acorn/src/tokenize.js","9c164b8e3a306fb4bfdb964396ae1453"],["node_modules/with/node_modules/acorn/src/tokentype.js","25b3a3b8eb75e879f066313fd1c2f30f"],["node_modules/with/node_modules/acorn/src/util.js","2f90748d9bf75304e0163c66822b5603"],["node_modules/with/node_modules/acorn/src/walk/index.js","847fce8affca3be513fb01e217d55a95"],["node_modules/with/node_modules/acorn/src/whitespace.js","7470b5b4107c3a276a7482416843b312"],["node_modules/with/package.json","2c5e41f83f90cd2afdb4212fc3297f4a"],["node_modules/wordwrap/README.markdown","8f734870852f7846a45edaa66aef5170"],["node_modules/wordwrap/example/center.js","4b2980029d6410678fdc2d1844bcc653"],["node_modules/wordwrap/example/meat.js","6dd9bdc5946202e7f7d039855c600c6d"],["node_modules/wordwrap/index.js","3d84eeca2461535450a0170fed972d8d"],["node_modules/wordwrap/package.json","8b8c53872ed6020acecf7cdd13e55d74"],["node_modules/wordwrap/test/break.js","31242884205e2baa900ac2cd708931cb"],["node_modules/wordwrap/test/idleness.txt","9a1eafba7a0938b9540bf1673b2494dd"],["node_modules/wordwrap/test/wrap.js","cd4e1370804eda03cff4a9e327c06dfe"],["node_modules/yargs/CHANGELOG.md","40944d732f30b98cc77891725146a344"],["node_modules/yargs/README.md","c0ca377e9879e3bc0c0b89663c48e302"],["node_modules/yargs/completion.sh.hbs","f0a8e26e6f1a609e452aacb9ceee3e84"],["node_modules/yargs/index.js","72ad126fc0b3ce13bd915e72b88e05e0"],["node_modules/yargs/lib/completion.js","22a96915bbcd4c2a838f87aab25249c6"],["node_modules/yargs/lib/parser.js","0f56740d485ac16dd1ca63c616199d54"],["node_modules/yargs/lib/usage.js","a4ce4c53119beb497f90040db9a98dfb"],["node_modules/yargs/lib/validation.js","d58968d68c85ddefb2994fc72c2f40f8"],["node_modules/yargs/package.json","2881c65481f54552d08a681dbe556d04"],["package-lock.json","4d3d7bfb1193f684db2f1a30e72d8792"],["package.json","ac664d7b4e9953665f77bb617b5f491d"],["src/js/app.min.js","15e6c575b1ad3a3bf3ff798faf2096fb"],["src/ts/app.ts","e9b247f25e974c30be8cb586e4169618"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







