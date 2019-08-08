if (typeof denakop === 'undefined') {
    var denakop = function () {
        var denakop_iframe = window.document.createElement('iframe'),
            denakop_style = window.document.createElement('style'),
            user = {"isBot":0,"dkUser":"dkuser_5d4c8519111408.97294895","uxid":"uxid_5d4c8519111468.52954627","userAgent":"Mozilla\/5.0 (X11; Linux x86_64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/75.0.3770.100 Safari\/537.36","url":{"scheme":"https","host":"www.daninoce.com.br","query":"","path":"\/receitas\/pacoca-versao-2-0\/"},"ip":"189.108.150.123","device":"desktop","browser":"chrome","operationalSystem":"linux","location":{"continent":"SA","country":"BR","stateprov":"S\u00e3o Paulo","district":"B\u00e1lsamo","city":"B\u00e1lsamo","isp_name":"Vivo","connection_type":"","organization_name":"H S Tecnologia em Inform\u00e1tica Ltda"}},
            settings = {"debug":false,"macros":{"view":"","click":""}},
            publisher = {"pId":223,"tId":"78e74069-54c5","enabled":true,"domain":{"roix_placementId":"","aol_placement":{"dsb":"5040605","dubh":"5040600","dubl":"5040604","dtb":"5040606","dab":"5040609","dfs":"5040608","mfs":"5040602","mubh":"5040601","mubl":"5040607","mtb":"5040603","tsb":"5040610","tub":"5040611","tfs":"5040612"},"appnexus":{"dsb":15692908,"dubh":15692910,"dubl":15692911,"dtb":15692909,"dab":15692906,"dfs":15692907,"mfs":15692912,"mubh":15692914,"mubl":15692915,"mtb":15692913,"tsb":15692917,"tub":15692918,"tfs":15692916},"pulsepoint":{"dsb":[{"cp":560821,"ct":681060,"cf":"300x250"},{"cp":560821,"ct":681059,"cf":"160x600"},{"cp":560821,"ct":681027,"cf":"300x600"}],"dubh":[{"cp":560821,"ct":681029,"cf":"728x90"},{"cp":560821,"ct":681030,"cf":"970x90"},{"cp":560821,"ct":681031,"cf":"970x250"}],"dubl":[{"cp":560821,"ct":681032,"cf":"728x90"}],"dtb":[{"cp":560821,"ct":681028,"cf":"728x90"}],"dab":[{"cp":560821,"ct":681056,"cf":"336x280"},{"cp":560821,"ct":583623,"cf":"300x250"}],"dfs":[{"cp":560821,"ct":681058,"cf":"300x250"},{"cp":560821,"ct":681057,"cf":"336x280"}],"mfs":[{"cp":560821,"ct":681033,"cf":"300x250"}],"mubh":[{"cp":560821,"ct":681035,"cf":"320x100"},{"cp":560821,"ct":681036,"cf":"320x50"}],"mubl":[{"cp":560821,"ct":681037,"cf":"320x50"}],"mtb":[{"cp":560821,"ct":681034,"cf":"320x50"}],"tsb":[{"cp":560821,"ct":681045,"cf":"160x600"}],"tub":[{"cp":560821,"ct":681047,"cf":"728x90"}],"tfs":[{"cp":560821,"ct":681038,"cf":"336x280"},{"cp":560821,"ct":681042,"cf":"300x250"}]},"status":1},"adUnits":[{"frequency":true,"f":[1,1],"aid":2498,"device":["mobile","tablet"],"weekdays":[[],[],[],[],[],[],[]],"cid":219,"cpm":0.15,"reload":true,"adUnitSizes":[[970,90],[728,90]],"adUnitCode":"\/21715141650\/dubl","format":"fixed_banner_728x90","newFormat":"dubl"}]},
            hb_conf = {
                seconds_to_wait_after_viewability: 45000,
                prebid_timeout: 2000,
                failsafe_timeout: 2500
            };

        var addEvent = function (o, e, f) {
            if (o.addEventListener) {
                o.addEventListener(e, f, false);
            } else if (o.attachEvent) {
                o.attachEvent('on' + e, f);
            } else {
                o['on' + e] = f;
            }
        };


        var removeEvent = function (o, e, f) {
            if (o.removeEventListener) {
                o.removeEventListener(e, f, false);
            } else if (o.detachEvent) {
                o.detachEvent('on' + e, f);
            } else {
                o['on' + e] = null;
            }
        };

        var rand = function () {
            return Math.floor(Math.random() * (10000000 - 1 + 1)) + 1;
        };

        var main = function () {
            debug('main');

            validations.init();
        };

        var getFormat = function (formato, device) {
            if (device === 'desktop') {
                if (formato === 'fixed_banner_336x280') {
                    return 'dab';

                }

                if (formato === 'fixed_banner_300x600') {
                    return 'dsb';

                }

                if (formato === 'fixed_banner_970x250') {
                    return 'dubh';

                }

                if (formato === 'fixed_banner_728x90') {
                    return 'dubl';

                }

                if (formato === 'fullscreen') {
                    return 'dfs';

                }
            } else if (device === 'mobile') {
                if (formato === 'fixed_banner_320x100') {
                    return 'mubh';

                }

                if (formato === 'fixed_banner_320x50') {
                    return 'mubl';

                }

                if (formato === 'under_banner_mobile_light_top_320x50') {
                    return 'mtb';

                }

                if (formato === 'fullscreen') {
                    return 'mfs';

                }
            } else {
                if (formato === 'fixed_banner_728x90_tablet' || formato === 'fixed_banner_728x90') {
                    return 'tub';

                }

                if (formato === 'fixed_banner_300x600') {
                    return 'tsb';

                }

                if (formato === 'fullscreen') {
                    return 'tfs';

                }
            }

            return 'unknown';
        };

        var loadScripts = function () {
            debug('loadScripts');

            window.googletag = window.googletag || {};
            window.googletag.cmd = window.googletag.cmd || [];

            window.dkpbjs = window.dkpbjs || {};
            window.dkpbjs.que = window.dkpbjs.que || [];

            var gpt = window.document.createElement('script'),
                hbjs = window.document.createElement('script'),
                body = window.document.body || window.document.getElementsByTagName('body')[0];

            gpt.src = user.url.scheme + '://www.googletagservices.com/tag/js/gpt.js';
            gpt.async = true;

            hbjs.src = user.url.scheme + '://v2.denakop.com/dkpb.js';
            hbjs.async = true;

            body.appendChild(gpt);
            body.appendChild(hbjs);
        };

        var fireAction = function (action, adUnit, firstLoad) {
            if (action == 'unauthorized' || settings.debug) return;
            debug('fireAction: ' + action);
            var str = '?pid=' + publisher.pId +
                '&device=' + user.device +
                '&os=' + user.operationalSystem +
                '&browser=' + user.browser +
                '&action=' + action +
                '&firstLoad=' + firstLoad +
                '&format=' + adUnit.format +
                '&tag=' + publisher.tId +
                '&dkUser=' + user.dkUser +
                '&uxid=' + user.uxid +
                '&age=' + user.profile.age +
                '&gender=' + user.profile.gender +
                '&socialclass=' + user.profile.socialClass +
                '&profiles=' + user.profile.profiles +
                '&subjects=' + user.profile.subjects +
                '&status=' + user.profile.status +
                '&cid=' + adUnit.cid +
                '&cpm=' + adUnit.cpm +
                '&aid=' + adUnit.aid +
                '&windowSize=' + (window.screen.width || 0) + 'x' + (window.screen.height || 0) +
                '&tz=' + (new Date()).getTime();

            if (typeof adUnit.f !== 'undefined') {
                str += '&f=' + adUnit.f.join(',');
            }

            if (typeof user.url.path !== 'undefined') {
                str += '&path=' + user.url.path;
            }

            if (typeof user.url.host !== 'undefined') {
                str += '&host=' + user.url.host;
            }

            if (typeof user.url.scheme !== 'undefined') {
                str += '&scheme=' + user.url.scheme;
            }

            if (typeof user.location.country !== 'undefined') {
                str += '&country=' + user.location.country;
            }

            if (typeof user.location.city !== 'undefined') {
                str += '&city=' + user.location.city;
            }

            if (typeof user.location.stateprov !== 'undefined') {
                str += '&state=' + user.location.stateprov;
            }

            if (typeof user.location.isp_name !== 'undefined') {
                str += '&isp=' + user.location.isp_name;
            }

            var url = user.url.scheme + '://v2.denakop.com/api.php' + encodeURI(str);
            imgTracking(url);
            fireMacro(action);
        };

        var imgTracking = function (src) {
            debug('imgTracking');
            var i = window.document.createElement('img'),
                body = window.document.body || window.document.getElementsByTagName('body')[0];
            i.style.position = 'fixed';
            i.style.top = '-10px';
            i.style.left = '-10px';
            i.style.width = '1px';
            i.style.height = '1px';
            i.src = src;

            body.appendChild(i);
        };

        var getBidders = function (format) {
            var bidders = [];

            // PULSEPOINT BIDDER
            /*if (typeof publisher.domain.pulsepoint === 'object' &&
				typeof publisher.domain.pulsepoint[format] !== 'undefined'
			) {
				for (var i = 0, p_length = publisher.domain.pulsepoint[format].length; i < p_length; i++) {
					bidders.push({
						bidder: 'pulsepoint',
						params: publisher.domain.pulsepoint[format][i]
					});
				}
			}*/

            // ROIX BIDDER
            if (typeof publisher.domain.roix_placementId !== 'undefined' &&
                publisher.domain.roix_placementId !== ''
            ) {
                bidders.push({
                    bidder: 'roix',
                    params: {
                        placementId: publisher.domain.roix_placementId
                    }
                });
            }

            // AOL BIDDER
            if (typeof publisher.domain.aol_placement === 'object' &&
                typeof publisher.domain.aol_placement[format] !== 'undefined' &&
                publisher.domain.aol_placement[format] !== ''
            ) {
                bidders.push({
                    'bidder': 'aol',
                    'params': {
                        network: '11627.1',
                        placement: publisher.domain.aol_placement[format]
                    }
                });
            }

            // APPNEXUS BIDDER
            if (typeof publisher.domain.appnexus === 'object' &&
                typeof publisher.domain.appnexus[format] !== 'undefined' &&
                publisher.domain.appnexus[format] !== ''
            ) {
                bidders.push({
                    'bidder': 'appnexus',
                    'params': {
                        placementId: publisher.domain.appnexus[format]
                    }
                });
            }

            return bidders;
        };

        var randString = function (length) {
            var chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM',
                string = '';

            for (var i = 0, charsLen = chars.length; i < length; i++) {
                string += chars.charAt(Math.floor(Math.random() * charsLen));
            }

            return string;
        };

        var buildTemplate = function (adUnit) {
            debug('buildTemplate');

            var div_denakop_ad_id = randString(10) + rand(),
                div_denakop_ad = window.document.createElement('div'),
                gpt_denakop_ad_id = randString(10) + rand(),
                sheet = window.document.createElement('style'),
                sheet_id = rand(),
                body = window.document.body || window.document.getElementsByTagName('body')[0];

            window.gpt_adunits[gpt_denakop_ad_id] = {
                cid: adUnit.cid,
                denakopDivId: div_denakop_ad_id,
                firstLoad: true,
                format: adUnit.format,
                newFormat: adUnit.newFormat,
                reload: adUnit.reload,
                sheet_id: sheet_id,
                adUnitCode: adUnit.adUnitCode,
                adUnitSizes: adUnit.adUnitSizes,
                cpm: adUnit.cpm,
                aid: adUnit.aid,
                f: adUnit.f
            };

            div_denakop_ad.setAttribute('id', div_denakop_ad_id);
            div_denakop_ad.style.display = 'none';
            div_denakop_ad.style.backgroundColor = '#ffffff';

            sheet.setAttribute('id', sheet_id);
            sheet.setAttribute('type', 'text/css');

            body.appendChild(div_denakop_ad);
            body.appendChild(sheet);

            createCloseBtn(div_denakop_ad, adUnit.newFormat);
        };

        var createCloseBtn = function (element, format) {
            debug('createCloseBtn');

            if (
                (format === 'dsb_esquerda' && user.url.host.indexOf('riovagas.com.br') !== -1) ||
                (
                    user.url.host.indexOf('altoastral.com.br') !== -1 ||
                    user.url.host.indexOf('joaobidu.com.br') !== -1 ||
                    user.url.host.indexOf('guiadacozinha.com.br') !== -1 ||
                    user.url.host.indexOf('todateen.com.br') !== -1 ||
                    user.url.host.indexOf('sportlife.com.br') !== -1
                )
            ) {
                return;
            }

            var div_btn_close = window.document.createElement('div'),
                div_btn_close_id = 'dk_btn_close_' + rand();

            if (format === 'dsb_direita' ||
                format === 'dab_direita' ||
                format === 'mubl' ||
                format === 'dubh' ||
                format === 'dubl' ||
                format === 'mubh' ||
                format === 'tsb_direita') {

                div_btn_close.setAttribute('style', 'position: absolute; cursor: pointer; width: 16px; height: 16px; bottom: 100%; left: 0px; background-color: #ffffff; box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px 0px; border: none; border-radius: 0px 3px 0px 0px; background-image: url(\'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTUgMTUiIHN0eWxlPSJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2hlaWdodDoxNnB4O3dpZHRoOjE2cHg7c3Ryb2tlOiMwMDViYWE7c3Ryb2tlLXdpZHRoOjEuMjU7Ij48cGF0aCBkPSJNMy4yNSwzLjI1bDguNSw4LjVNMTEuNzUsMy4yNWwtOC41LDguNSI+PC9wYXRoPjwvc3ZnPg==\');');

                if (format === 'mubl' || format === 'mubh') {
                    element.innerHTML += '<div style=" position: absolute; height: 8px; width: 16px; z-index: 999; bottom: calc(100% + 8px); "></div><div style=" position: absolute; bottom: 100%; width: 36px; height: 26px; left: -10px; "></div>';
                }
            } else if (format === 'dtb' ||
                format === 'mtb') {
                div_btn_close.setAttribute('style', 'position: absolute; overflow: visible; top: 3px; left: 3px; width: 19px; height: 19px; z-index: 999; background-size: contain; cursor: pointer; background-image: url(//cdn.denakop.com/cb.png);');

            } else if (format === 'mfs' ||
                format === 'tfs') {
                div_btn_close.setAttribute('style', 'font-family: Arial, \'Helvetica Neue\', Helvetica, sans-serif; text-align: center; line-height: 50px; font-size: 18px; border: none; color: #fff; left: 0; top: 0; position: absolute; background-color: rgb(255, 76, 42); height: 50px; width: 100%; z-index: 2147483647; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;');
                div_btn_close.innerHTML = 'AGUARDE, CARREGANDO...';

            } else if (format === 'dfs') {
                div_btn_close.setAttribute('style', '-webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; position: fixed; top: calc(100% - 90px); left: calc(50% - 160px); height: 60px; width: 320px; font-family: Arial, \'Helvetica Neue\', Helvetica, sans-serif; color: #ffffff; font-size: 22px; background: rgba(0, 0, 0, 0.6); border: solid #666 1px; text-decoration: none; line-height: 60px; outline: none; overflow: hidden; text-align: center; z-index: 2147483647;');
                div_btn_close.innerHTML = 'Aguarde, carregando ...';

            } else if (format === 'dsb_esquerda' ||
                format === 'dab_esquerda' ||
                format === 'tub') {
                div_btn_close.setAttribute('style', 'position: absolute; overflow: visible; top: 3px; left: 3px; width: 19px; height: 19px; z-index: 999; background-size: contain; cursor: pointer; background-image: url(//cdn.denakop.com/cb.png);');

            } else {
                debugError('Format nor found' + format);
            }

            div_btn_close.setAttribute('id', div_btn_close_id);

            element.appendChild(div_btn_close);
        };

        var sendGoogle = function (adUnits) {
            debug('sendGoogle');

            window.dkpbjs.que.push(function () {
                window.dkpbjs.aliasBidder('appnexus', 'roix');
                window.dkpbjs.bidderSettings = {
                    appnexus: {
                        bidCpmAdjustment: function (bidCpm, bid) {
                            return bidCpm * 1.6;
                        }
                    },
                    roix: {
                        bidCpmAdjustment: function (bidCpm, bid) {
                            bidCpm = (bid.mediaType === 'video') ? 2 : 0.9;

                            return bidCpm * 1.6;
                        }
                    },
                    aol: {
                        bidCpmAdjustment: function (bidCpm) {
                            return bidCpm * 1.28; // NET 80%
                        }
                    },
                    pulsepoint: {
                        bidCpmAdjustment: function (bidCpm) {
                            return bidCpm * 1.6;
                        }
                    }
                };
                window.dkpbjs.setConfig({
                    priceGranularity: {
                        buckets: [
                            {
                                precision: 2,
                                min: 0,
                                max: 100,
                                increment: 0.01
                            }
                        ]
                    },
                    enableSendAllBids: false
                });
                window.dkpbjs.addAdUnits(adUnits);
                window.dkpbjs.requestBids({
                    bidsBackHandler: initAdserver,
                    timeout: hb_conf.prebid_timeout
                });
            });

            setTimeout(function () {
                initAdserver();
            }, hb_conf.failsafe_timeout);

            window.googletag.cmd.push(function () {
                window.googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                    if (typeof window.gpt_adunits[event.slot.getSlotElementId()] !== 'undefined' && event.isEmpty === false) {
                        debug('slotRenderEnded: ' + event.slot.getSlotElementId());

                        var googleIframe = window.document.getElementById('google_ads_iframe_' + event.slot.getAdUnitPath() + '_0'),
                            div_denakop_ad = window.document.getElementById(event.slot.getSlotElementId()).parentElement,
                            sheet = window.document.getElementById(window.gpt_adunits[event.slot.getSlotElementId()].sheet_id),
                            css = '',
                            iframeWidth = parseInt(googleIframe.width),
                            iframeHeight = parseInt(googleIframe.height);

                        googleIframe.parentElement.style.display = 'block';
                        googleIframe.parentElement.style.overflow = 'visible';

                        googleIframe.style.width = googleIframe.width + 'px';
                        googleIframe.style.height = googleIframe.height + 'px';

                        div_denakop_ad.style.position = 'fixed';
                        div_denakop_ad.style.display = 'block';
                        div_denakop_ad.style.overflow = 'visible';
                        div_denakop_ad.style.zIndex = '2147483646';
                        div_denakop_ad.style.transition = 'right 500ms, left 500ms, top 500ms, bottom 500ms, display 500ms';


                        if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dab_direita') {
                            div_denakop_ad.style.right = '0px';
                            div_denakop_ad.style.bottom = '0px';

                        } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dab_esquerda') {
                            div_denakop_ad.style.left = '0px';
                            div_denakop_ad.style.bottom = '0px';

                        } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dsb_esquerda') {
                            div_denakop_ad.style.top = 'calc(50% - ' + (iframeHeight / 2) + 'px)';

                            if (user.url.host.indexOf('riovagas.com.br') !== -1) {
                                div_denakop_ad.style.left = '0px';
                            } else {
                                if (iframeWidth <= 160 || (iframeHeight === 250 && iframeWidth === 300)) {
                                    div_denakop_ad.style.left = '0px';
                                } else {
                                    div_denakop_ad.style.left = -iframeWidth / 2 + 'px';
                                    css += '#' + div_denakop_ad.id + ':hover{ left: 0px !important}';

                                    window.gpt_adunits[event.slot.getSlotElementId()].scroll = false;
                                    var func = function () {
                                        if (window.gpt_adunits[event.slot.getSlotElementId()].scroll) {
                                            removeEvent(window.top, 'scroll', func);

                                            return;
                                        }
                                        window.gpt_adunits[event.slot.getSlotElementId()].scroll = true;

                                        div_denakop_ad.style.left = '0px';
                                        setTimeout(function () {
                                            div_denakop_ad.style.left = -iframeWidth / 2 + 'px';
                                        }, 5000);
                                    };

                                    addEvent(window.top, 'scroll', func);
                                }
                            }

                        } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dsb_direita' ||
                            window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'tsb_direita') {
                            div_denakop_ad.style.top = 'calc(50% - ' + (iframeHeight / 2) + 'px)';

                            if (iframeWidth <= 160) {
                                div_denakop_ad.style.right = '0px';
                            } else {
                                div_denakop_ad.style.right = -iframeWidth / 2 + 'px';
                                css += '#' + div_denakop_ad.id + ':hover{ right: 0px !important}';

                                window.gpt_adunits[event.slot.getSlotElementId()].scroll = false;
                                var func = function () {
                                    if (window.gpt_adunits[event.slot.getSlotElementId()].scroll) {
                                        removeEvent(window.top, 'scroll', func);

                                        return;
                                    }
                                    window.gpt_adunits[event.slot.getSlotElementId()].scroll = true;

                                    div_denakop_ad.style.right = '0px';
                                    setTimeout(function () {
                                        div_denakop_ad.style.right = -iframeWidth / 2 + 'px';
                                    }, 5000);
                                };


                                addEvent(window.top, 'scroll', func);
                            }


                        } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dtb' ||
                            window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mtb') {
                            div_denakop_ad.style.left = 'calc(50% - ' + (iframeWidth / 2) + 'px)';
                            div_denakop_ad.style.top = '0px';


                        } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dubh' ||
                            window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dubl' ||
                            window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mubh' ||
                            window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mubl' ||
                            window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'tub') {
                            div_denakop_ad.style.left = 'calc(50% - ' + (iframeWidth / 2) + 'px)';

                            if (iframeHeight <= 100) {
                                div_denakop_ad.style.bottom = '0px';

                                if(window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mubh' || window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mubl') {
                                    if (user.url.host.indexOf('catracalivre.com.br') !== -1 || user.url.host.indexOf('pizzaplanet.wpengine.com') !== -1) {
                                        var d = window.document.createElement('div');
                                        d.style.width = '100%';
                                        d.style.height = iframeHeight + 'px';
                                        d.style.position = 'fixed';
                                        d.id = 'cl_blankspace';
                                        d.style.left = '0px';
                                        d.style.zIndex = '-1';
                                        d.style.backgroundColor = '#ffffff';
                                        div_denakop_ad.style.zIndex = '11';

                                        if (window.document.getElementsByClassName('menu-principal').length > 0) {
                                            div_denakop_ad.style.bottom = '54px';
                                            d.style.bottom = '54px';
                                        } else {
                                            div_denakop_ad.style.bottom = '0px';
                                            d.style.bottom = '0px';
                                        }

                                        div_denakop_ad.appendChild(d);
                                    } else if (user.url.path !== '/' && user.url.host.indexOf('bemparana.com.br') !== -1) {
                                        div_denakop_ad.style.bottom = '48px';
                                    }
                                }
                            } else {
                                div_denakop_ad.style.bottom = -iframeHeight / 2 + 'px';
                                css += '#' + div_denakop_ad.id + ':hover{ bottom: 0px !important}';

                                if (user.url.host.indexOf('correiodopovo.com.br') === -1) {
                                    window.gpt_adunits[event.slot.getSlotElementId()].scroll = false;
                                    var func = function () {
                                        if (window.gpt_adunits[event.slot.getSlotElementId()].scroll) {
                                            removeEvent(window.top, 'scroll', func);

                                            return;
                                        }
                                        window.gpt_adunits[event.slot.getSlotElementId()].scroll = true;

                                        div_denakop_ad.style.bottom = '0px';
                                        setTimeout(function () {
                                            div_denakop_ad.style.bottom = -iframeHeight / 2 + 'px';
                                        }, 5000);
                                    };

                                    addEvent(window.top, 'scroll', func);
                                }
                            }
                        } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dfs') {

                            div_denakop_ad.style.left = '0';
                            div_denakop_ad.style.top = '0';

                            googleIframe.style.width = '100vw';
                            googleIframe.style.height = '100vh';

                        } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mfs' ||
                            window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'tfs') {
                            div_denakop_ad.style.zIndex = '2147483647';

                            if (window.gpt_adunits[event.slot.getSlotElementId()].cid === 206) {
                                div_denakop_ad.style.top = '0';
                                div_denakop_ad.style.left = '0';

                                div_denakop_ad.style.width = '100vw';
                                div_denakop_ad.style.height = '100vh';

                                div_denakop_ad.style.backgroundColor = '#000';

                                googleIframe.style.marginTop = '50px';
                                googleIframe.style.width = '100vw';
                                googleIframe.style.height = 'calc(100vh - 50px)';
                            } else {
                                div_denakop_ad.style.top = '0';
                                div_denakop_ad.style.left = '0';

                                div_denakop_ad.style.width = '100vw';
                                div_denakop_ad.style.height = '100vh';

                                div_denakop_ad.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

                                googleIframe.parentElement.parentElement.style.position = 'absolute';
                                googleIframe.parentElement.parentElement.style.top = 'calc(50% - ' + ((iframeHeight / 2) - 25) + 'px)';
                                googleIframe.parentElement.parentElement.style.right = 'calc(50% - ' + iframeWidth / 2 + 'px)';
                            }
                        } else {
                            debugError(JSON.stringify(window.gpt_adunits[event.slot.getSlotElementId()]));
                        }

                        if (window.gpt_adunits[event.slot.getSlotElementId()].firstLoad) {
                            var divCloseBtn = null,
                                divDenakopAdChildNodes = div_denakop_ad.childNodes,
                                childNodesLength = divDenakopAdChildNodes.length;

                            for (var i = 0; i < childNodesLength; i++) {
                                if (divDenakopAdChildNodes[i].id.indexOf('dk_btn_close_') > -1) {
                                    divCloseBtn = divDenakopAdChildNodes[i];
                                }
                            }


                            if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mfs' ||
                                window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'tfs') {
                                var t = 3,
                                    inter = setInterval(function () {
                                        if (t > 0) {
                                            divCloseBtn.innerHTML = 'FECHAR ANÚNCIO EM ' + t;
                                            divCloseBtn.style.cursor = 'pointer';
                                        } else {
                                            clearInterval(inter);
                                            divCloseBtn.innerHTML = 'FECHAR ANÚNCIO<span style="float: right;margin-right: 20px;">X</span>';

                                            addCloseButtonEvent(divCloseBtn);
                                        }
                                        t--;

                                    }, 1000);
                            } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dfs') {
                                var t = 5,
                                    inter = setInterval(function () {
                                        if (t > 0) {
                                            divCloseBtn.innerHTML = 'Fechar anúncio em ' + t;
                                        } else {
                                            clearInterval(inter);
                                            divCloseBtn.style.cursor = 'pointer';
                                            divCloseBtn.innerHTML = 'Fechar anúncio';

                                            addCloseButtonEvent(divCloseBtn);
                                        }
                                        t--;

                                    }, 1000);
                            } else if (divCloseBtn !== null) {
                                addCloseButtonEvent(divCloseBtn);
                            }
                        }

                        sheet.innerHTML = css;
                    }
                });

                window.googletag.pubads().addEventListener('impressionViewable', function (event) {
                    if (typeof window.gpt_adunits[event.slot.getSlotElementId()] !== 'undefined') {
                        fireAction('view', window.gpt_adunits[event.slot.getSlotElementId()], window.gpt_adunits[event.slot.getSlotElementId()].firstLoad);
                        window.gpt_adunits[event.slot.getSlotElementId()].firstLoad = false;

                        if (event.slot.getTargeting('refresh').indexOf('true') > -1) {
                            setTimeout(function () {
                                debug('AD RELOADED: ' + event.slot.getAdUnitPath());
                                fireAction('authorized', window.gpt_adunits[event.slot.getSlotElementId()]);

                                var div_denakop_ad = window.document.getElementById(event.slot.getSlotElementId()).parentElement;
                                div_denakop_ad.style.display = 'none';

                                if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dsb_esquerda' ||
                                    window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dab_esquerda') {
                                    div_denakop_ad.style.left = '-150%';

                                } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dab_direita' ||
                                    window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'tsb_direita' ||
                                    window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dsb_direita') {
                                    div_denakop_ad.style.right = '-150%';

                                } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'tub' ||
                                    window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mubl' ||
                                    window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dubl' ||
                                    window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mubh' ||
                                    window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dubh') {
                                    div_denakop_ad.style.bottom = '-150%';

                                } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dfs') {
                                    div_denakop_ad.style.top = '-150%';

                                } else if (window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'mtb' ||
                                    window.gpt_adunits[event.slot.getSlotElementId()].newFormat === 'dtb') {
                                    div_denakop_ad.style.top = '-150%';

                                } else {
                                    debugError(JSON.stringify(window.gpt_adunits[event.slot.getSlotElementId()]));
                                }

                                window.dkpbjs.que.push(function () {
                                    window.dkpbjs.requestBids({
                                        timeout: hb_conf.prebid_timeout,
                                        adUnitCodes: [event.slot.getAdUnitPath()],
                                        bidsBackHandler: function () {
                                            window.dkpbjs.setTargetingForGPTAsync([event.slot.getAdUnitPath()]);
                                            window.googletag.pubads().refresh([event.slot]);
                                        }
                                    });
                                });
                            }, hb_conf.seconds_to_wait_after_viewability);
                        }
                    }
                });
            });

            for (var gptDenakopAdId in window.gpt_adunits) {
                if (window.gpt_adunits.hasOwnProperty(gptDenakopAdId)) {
                    var gptDenakopAd = window.document.createElement('div'),
                        denakopDiv = window.document.getElementById(window.gpt_adunits[gptDenakopAdId].denakopDivId);

                    gptDenakopAd.setAttribute('id', gptDenakopAdId);
                    denakopDiv.appendChild(gptDenakopAd);
                }
            }
        };

        var initAdserver = function () {
            if (window.dkpbjs.initAdserverSet) return;
            window.dkpbjs.initAdserverSet = true;
            window.googletag.cmd.push(function () {
                window.dkpbjs.que.push(function () {
                    for (var gptDenakopAdId in window.gpt_adunits) {
                        if (window.gpt_adunits.hasOwnProperty(gptDenakopAdId)) {

                            window.gpt_adunits[gptDenakopAdId].googleSlot = window.googletag.defineSlot(window.gpt_adunits[gptDenakopAdId].adUnitCode, window.gpt_adunits[gptDenakopAdId].adUnitSizes, gptDenakopAdId)
                                .setTargeting('refresh', window.gpt_adunits[gptDenakopAdId].reload.toString())
                                .setTargeting('hostname', user.url.host)
                                .setTargeting('age', user.profile.age)
                                .setTargeting('isp', user.location.isp_name)
                                .setTargeting('pathname', user.url.path.substring(0, 40))
                                .addService(window.googletag.pubads());
                        }
                    }

                    window.googletag.pubads().enableSingleRequest();
                    window.googletag.pubads().enableAsyncRendering();
                    window.googletag.enableServices();

                    window.dkpbjs.setTargetingForGPTAsync();

                    var timeoutTime = (user.url.host.indexOf('cursoenemgratuito.com.br') === -1) ? 20 : 10000;

                    setTimeout(function () {
                        for (var gptDenakopAdId in window.gpt_adunits) {
                            if (window.gpt_adunits.hasOwnProperty(gptDenakopAdId)) {
                                window.googletag.display(gptDenakopAdId);

                                if (window.googletag.pubads().isInitialLoadDisabled()) {
                                    window.googletag.pubads().refresh([window.gpt_adunits[gptDenakopAdId].googleSlot]);
                                }
                            }
                        }
                    }, timeoutTime)
                });
            });
        };

        var getAdUnit = function (adUnit) {
            debug('getAdUnit');

            return {
                code: adUnit.adUnitCode,
                mediaTypes: {
                    banner: {
                        sizes: adUnit.adUnitSizes
                    }
                },
                bids: getBidders(getFormat(adUnit.format, user.device))
            };
        };

        var addCloseButtonEvent = function (divCloseBtn) {
            addEvent(divCloseBtn, 'click', function () {
                var body = window.document.body || window.document.getElementsByTagName('body')[0];

                body.removeChild(divCloseBtn.parentNode);
                delete window.gpt_adunits[divCloseBtn];
            });
        };

        var validations = {
            init: function () {
                debug('validations.init');

                var adUnits = [];

                if (validations.bot() && validations.domainAuth() && validations.publisherShowAd()) {
                    for (var i = 0, len = publisher.adUnits.length; i < len; i++) {
                        var v = publisher.adUnits[i];

                        if (validations.frequency(v.frequency) && validations.device(v.device) && validations.weekdays(v.weekdays)) {
                            if (adUnits.length === 0) {
                                loadScripts();
                            }
                            fireAction('authorized', v);

                            buildTemplate(v);

                            adUnits.push(getAdUnit(v));
                        } else {
                            fireAction('unauthorized', v);
                        }
                    }

                    if (len <= 0) {
                        debug('no ads');
                    }
                }

                if (adUnits.length > 0) {
                    sendGoogle(adUnits);
                }
            },
            domainAuth: function () {
                debug('domainAuth');

                return typeof publisher.domain === 'object' && publisher.domain.status;
            },
            publisherShowAd: function () {
                debug('publisherShowAd: ' + publisher.enabled);

                return publisher.enabled;
            },

            adUnitShowAd: function (v) {
                debug('validations.adUnitShowAd');

                return v;
            },
            frequency: function (v) {
                debug('frequency');

                return v;
            },
            bot: function () {
                return !user.isBot;
            },
            device: function (v) {
                debug('validations.device');

                return v.indexOf(user.dispositivo) === -1;
            },
            weekdays: function (v) {
                debug('validations.weekdays');

                var d = new Date();

                return v[d.getDay()].indexOf(d.getHours()) === -1;
            }
        };

        var tailtarget = function () {
            debug('tailtarget');
            var w = denakop_iframe.contentWindow,
                d = denakop_iframe.contentDocument || w.document,
                p = d.createElement('script'),
                h = d.head || d.getElementsByTagName('head')[0],
                tailCallback = function (_ttprofiles) {
                    user.profile = {
                        age: _ttprofiles.getAge,
                        gender: _ttprofiles.getGender,
                        profiles: _ttprofiles.getProfiles.join(','),
                        subjects: _ttprofiles.getSubjects.join(','),
                        socialClass: _ttprofiles.getSocialClass,
                        status: _ttprofiles.getStatus
                    };

                    main();
                };

            w._ttprofiles = w._ttprofiles || [];
            w._ttprofiles.push(['_sync', false]);
            w._ttprofiles.push(['_enableServices']);
            w._ttprofiles.push(['_registerCallback', tailCallback]);

            p.src = user.url.scheme + '://v2.denakop.com/profiles.js';
            p.type = 'text/javascript';
            h.appendChild(p);
        };

        var fireMacro = function (a) {
            var u = '';
            if (a === 'view' && settings.macros.view !== '') {
                u = settings.macros.view;
            } else if (a === 'click' && settings.macros.click !== '') {
                u = settings.macros.click;
            } else {
                return;
            }

            debug('fireMacro: ' + a);
            imgTracking(u);
        };

        var init = function () {
            if (settings.init) {
                return;
            }

            debug('init');
            settings.init = true;
            window.gpt_adunits = window.gpt_adunits || {};

            settings.denakop_iframe_id = rand();
            settings.denakop_style_id = rand();

            denakop_iframe.src = 'about:blank';
            denakop_iframe.style.cssText = 'width: 0; height: 0; top: 0; left: 0; position: fixed; display: none;';
            denakop_iframe.setAttribute('id', settings.denakop_iframe_id);

            denakop_style.setAttribute('type', 'text/css');
            denakop_style.setAttribute('id', settings.denakop_style_id);

            addEvent(denakop_iframe, 'load', tailtarget);

            var body = window.document.body || window.document.getElementsByTagName('body')[0];
            body.appendChild(denakop_iframe);
            body.appendChild(denakop_style);


            /*
            var dIw = denakop_iframe.contentWindow,
                dId = denakop_iframe.contentDocument || w.document;

            dIw._rl_cn = dIw._rl_cn || 0;
            dIw._rl_ptc = ('https:' == window.location.protocol ? 'https' : 'http');
            dIw._rl_ids = dIw._rl_ids || [];
            dIw._rely = dIw._rely || [];
            dIw._rl_ids.push({pid: 1103, src: 0});
            dIw._rely.send = dIw._rely.send ? dIw._rely.send : function () {};

            dIw.rl = dId.createElement('script');
            dIw.rl.type = 'text/javascript';
            dIw.rl.async = true;
            dIw.rl.src = 'https://api.retargetly.com/loader?id=' + dIw._rl_ids[dIw._rl_ids.length - 1].pid;
            dIw.rl.id = 'rely-api-' + (dIw._rl_cn++);

            dId.head.appendChild(dIw.rl);
             */
        };

        var debug = function (k) {
            if (settings.debug === true) {
                console.log('[DENAKOP] ' + k);
            }
        };

        var debugError = function (k) {
            if (settings.debug === true) {
                console.error('[DENAKOP] ' + k);
            }
        };

        return {
            init: init
        };
    }();

    denakop.init();
}
