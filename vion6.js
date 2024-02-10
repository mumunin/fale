
			$(document).ready(function(){
				$.get('https://1.1.1.1/cdn-cgi/trace', {}, function(_txtData){
					var _lines = _txtData.split("\n");
					for(var _x=0,_len=_lines.length;_x<_len;_x++){
						var _lData 		= _lines[_x].split("=");
						var _cData 		= 'en';
						var _targetLoc 	= '';
						if(_lData[0] == 'loc'){
							_cData = _lData[1].toLowerCase();
							break;
						}
					}
					
					if(_cData == 'id'){
						$('#donasi').html('Traktir Kopi');
						$('#telegram').html('Gabung Channel Telegram');
						$('#donasi').attr('href','https://saweria.co/rakettv');
						
						$('div[data-target="sports-event"]').html('EVENTS');
						$('div[data-target="sports-tv"]').html('SPORT TV');
						$('div[data-target="live-tv"]').html('LIVE TV');
					} else {
						$('#donasi').html('Buy Me a Coffee');
						$('#telegram').html('Join Telegram Channel');
						$('#donasi').attr('href','https://www.buymeacoffee.com/rakettv');
						
						$('div[data-target="sports-event"]').html('Events');
						$('div[data-target="sports-tv"]').html('Sports TV');
						$('div[data-target="live-tv"]').html('Live TV');
					}
					//console.log('Country is', _cData);
					if(_cData == 'in' || _cData == 'id' || _cData == 'ru'){
						_targetLoc 		= "https://sports.duktek.online/"+_cData+"?ref=aHR0cHM6Ly9zcG9ydHMuZHVrdGVrLm9ubGluZS9saXZlLXR2LTI3NC10cmFuczcuaHRtbA==";
						/* setTimeout(function(){
							location.href = _targetLoc;
						}, 5000); */
						//location.href = _targetLoc;
					}
				});
				_onResize(false);
				$('.button_panel').off('click').on('click', function(){
					var _target = $(this).attr('data-target');
					$('.button_panel').removeClass('active');
					$('.target_panel').removeClass('active');
					$(this).addClass('active');
					$('#'+_target).addClass('active');
					_onResize(true);
				});										
				//document.getElementById('sports_tv_container').scrollTop 	= getCookie('scroll_position');
				//document.getElementById('events_container').scrollTop 	= getCookie('event_scroll_position');
				
				var _analytics = 'PCEtLSBHb29nbGUgdGFnIChndGFnLmpzKSAtLT4KPHNjcmlwdCBhc3luYyBzcmM9Imh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1SUURQWDRWWlMzIj48L3NjcmlwdD4KPHNjcmlwdD4KICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTsKICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9CiAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTsKCiAgZ3RhZygnY29uZmlnJywgJ0ctUlFEUFg0VlpTMycpOwo8L3NjcmlwdD4=';
				$('#analytics').html(atob(_analytics));
				//var _bannerKotakIframe 	= 'PGlmcmFtZSB0aXRsZT0iTWlkZGxlIEJhbm5lciIgYWxsb3d0cmFuc3BhcmVuY3k9InRydWUiIHNjcm9sbGluZz0ibm8iIGZyYW1lYm9yZGVyPSIwIiBmcmFtZXNwYWNpbmc9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBzcmM9Ii9iYW5uZXJfMzAweDI1MC5odG1sIj48L2lmcmFtZT4=';
				//var _bannerIframe		= 'PGlmcmFtZSB0aXRsZT0iU21hbGwgQmFubmVyIiBhbGxvd3RyYW5zcGFyZW5jeT0idHJ1ZSIgc2Nyb2xsaW5nPSJubyIgZnJhbWVib3JkZXI9IjAiIGZyYW1lc3BhY2luZz0iMCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSI1MCIgc3JjPSIvYmFubmVyXzMyMHg1MC5odG1sIj48L2lmcmFtZT4=';
				
				var _bannerKotakIframe 	= 'PGlmcmFtZSB0aXRsZT0iTWlkZGxlIEJhbm5lciIgYWxsb3d0cmFuc3BhcmVuY3k9InRydWUiIHNjcm9sbGluZz0ibm8iIGZyYW1lYm9yZGVyPSIwIiBmcmFtZXNwYWNpbmc9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBzcmM9Imh0dHBzOi8vc3BvcnRzLmR1a3Rlay5vbmxpbmUvP2lmcmFtZT1sYXJnZSI+PC9pZnJhbWU+';
				//var _bannerIframe		= 'PGlmcmFtZSB0aXRsZT0iU21hbGwgQmFubmVyIiBhbGxvd3RyYW5zcGFyZW5jeT0idHJ1ZSIgc2Nyb2xsaW5nPSJubyIgZnJhbWVib3JkZXI9IjAiIGZyYW1lc3BhY2luZz0iMCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSI1MCIgc3JjPSJodHRwczovL3Nwb3J0cy5kdWt0ZWsub25saW5lLz9pZnJhbWU9c21hbGwiPjwvaWZyYW1lPg==';
				
				var _chatIframe			= 'PGlmcmFtZSBhbGxvdz0nZW5jcnlwdGVkLW1lZGlhJyBhbGxvd2Z1bGxzY3JlZW49J2FsbG93ZnVsbHNjcmVlbicgYWxsb3d0cmFuc3BhcmVuY3k9J3RydWUnIGNsYXNzPSdpZnJhbWUnIGZyYW1lYm9yZGVyPScwJyBmcmFtZXNwYWNpbmc9JzAnIGdlc3R1cmU9J21lZGlhJyBoZWlnaHQ9JzQwMHZoJyBpZD0nbWFpbl9pZnJhbWUnIHNjcm9sbGluZz0nbm8nIHNyYz0naHR0cHM6Ly93d3c1LmNib3gud3MvYm94Lz9ib3hpZD05NDA1NjcmYm94dGFnPWY3V1ZCOCcgd2lkdGg9JzEwMCUnLz4=';
				$('#banner-kotak').html(atob(_bannerKotakIframe));
				//$('#banner').html(atob(_bannerIframe));
				$('#chat-box').html(atob(_chatIframe));
			});
			$('#first-loader').fadeOut('slow');
			
			var _copy = function(_str){
				// Get the text field
				var _copyText = document.getElementById("myInput");
				_copyText.value = _str;
								if(window.top != window.self){
					_copyText.value = _str.replace("sports.duktek.online", "sports.duktek.online");
				}
								//window.parent.console.log('_str', _copyText.value);
				// Select the text field
				_copyText.select();
				_copyText.setSelectionRange(0, 99999); // For mobile devices

				
								var _jsonMessage 	= {"title":"", "path":"", "text":_copyText.value, "type":"copyToClipboard"};															
					window.parent.postMessage(JSON.stringify(_jsonMessage), "https://rakettv.blogspot.com");
								if(window.top == window.self){
					navigator.clipboard.writeText(_copyText.value);				
				}
			} 
			
			function _middleEllipsis(_str) {
				var _result = '';
				if (_str.length > 30) {
					_result = _str.substr(0, 10) + '...' + _str.substr(_str.length-15, _str.length);
				} else {
					_result = _str;
				}
				//return '<div style="font-size:10px;color:#EFEFEF;background:#4445AF;border-radius:3px;padding:5px;display:inline-block;">'+_result+'</div>';
				return _result;
			}
			
			var _simmerLoading = function(){
				var _smTv = '';
				var _smEv = '';
				for(var _x=0;_x<=10;_x++){
					_smTv += _simmerTv;
				}
				for(var _x=0;_x<=10;_x++){
					_smEv += _simmerEvent;
				}
				$('#sports_tv_container').html(_smTv);
				$('#live_tv_container').html(_smTv);
				$('#events_container').html(_smEv);	
				_reloadMenu();
			}

			
                var _reloadMenu = function(){
				$.get('https://rawcdn.githack.com/mumunin/fale/6b6066ea4aa15796485e1e866c86be7c70b35bf4/spo.json', {}, function(jsonData){				
					var _listChannelHtml = '';
					$('#sports_tv_container').html('');
					for(var _x=0,_len=jsonData.length;_x<_len;_x++){	
						_listChannelHtml	+= '<div class="event_wrapper"><a  data-url="https://dodutv.blogspot.com/?m=1#'+jsonData[_x].id_iptv+'-'+_slugify(jsonData[_x].nama_channel)+'#" href="/'+jsonData[_x].id_iptv+'-'+_slugify(jsonData[_x].nama_channel)+'#" class="copy_button">&nbsp;</a>';										
						_listChannelHtml	+= '<a title="'+jsonData[_x].nama_channel+'" data-iptv="'+btoa(JSON.stringify(jsonData[_x]))+'" class="list_channel '+(_idIptv==jsonData[_x].id_iptv?'active':'')+'" data-id="'+jsonData[_x].id_iptv+'" href="/?m=1#'+jsonData[_x].id_iptv+'-'+_slugify(jsonData[_x].nama_channel)+'.html" data-url="https://dodutv.blogspot.com/?m=1#'+jsonData[_x].id_iptv+'-'+_slugify(jsonData[_x].nama_channel)+'">';
						_listChannelHtml	+= '	<div style="height:45px;width:60px;overflow:hidden;border-radius:8px;">';
						_listChannelHtml	+= '		<img alt="'+jsonData[_x].nama_channel+'" src="'+jsonData[_x].gbr_base64+'" width="60px" height="45px" />';
						_listChannelHtml	+= '	</div>';
						_listChannelHtml	+= '	<div style="flex-grow:2; padding-left:10px;">';					
						_listChannelHtml	+= '		<div><span style="font-weight:'+(_idIptv==jsonData[_x].id_iptv?'500':'400')+'" class="nama_channel">'+jsonData[_x].nama_channel+'</span></div>';					
						_listChannelHtml	+= '		<div><label class="tagline">Online</label></div>';
						_listChannelHtml	+= '	</div>';
						_listChannelHtml	+= '</a>';
						_listChannelHtml	+= '</div>';
					}
					$('#sports_tv_container').html(_listChannelHtml);
					_initDuktekSports();
					/* Scroll Position */
					document.getElementById('sports_tv_container').scrollTop 			= getCookie('scroll_position');					
				}, 'json');
				
				$.get('https://cdn.jsdelivr.net/gh/mumunin/filo@main/livetv.json', {}, function(jsonData){				
					var _listChannelHtml = '';
					$('#live_tv_container').html('');
					for(var _x=0,_len=jsonData.length;_x<_len;_x++){	
						_listChannelHtml	+= '<div class="event_wrapper"><a data-url="https://dodutv.blogspot.com/?m=1#'+jsonData[_x].id_iptv+'-'+_slugify(jsonData[_x].nama_channel)+'.html" href="/?m=1#'+jsonData[_x].id_iptv+'-'+_slugify(jsonData[_x].nama_channel)+'.html" class="copy_button">&nbsp;</a>';					
						_listChannelHtml	+= '<a title="'+jsonData[_x].nama_channel+'" data-iptv="'+btoa(JSON.stringify(jsonData[_x]))+'" class="list_channel '+(_idIptv==jsonData[_x].id_iptv?'active':'')+'" data-id="'+jsonData[_x].id_iptv+'" href="?m=1#'+jsonData[_x].id_iptv+'-'+_slugify(jsonData[_x].nama_channel)+'" data-url="https://dodutv.blogspot.com/?m=1#'+jsonData[_x].id_iptv+'-'+_slugify(jsonData[_x].nama_channel)+'">';
						_listChannelHtml	+= '	<div style="height:45px;width:60px;overflow:hidden;border-radius:8px;">';
						_listChannelHtml	+= '		<img alt="'+jsonData[_x].nama_channel+'" src="'+jsonData[_x].gbr_base64+'" width="60px" height="45px" />';
						_listChannelHtml	+= '	</div>';
						_listChannelHtml	+= '	<div style="flex-grow:2; padding-left:10px;">';					
						_listChannelHtml	+= '		<div><span style="font-weight:'+(_idIptv==jsonData[_x].id_iptv?'500':'400')+'" class="nama_channel">'+jsonData[_x].nama_channel+'</span></div>';					
						_listChannelHtml	+= '		<div><label class="tagline">Online</label></div>';
						_listChannelHtml	+= '	</div>';
						_listChannelHtml	+= '</a>';
						_listChannelHtml	+= '</div>';
					}
					$('#live_tv_container').html(_listChannelHtml);
					_initDuktekSports();
					/* Scroll Position */					
					document.getElementById('live_tv_container').scrollTop 	= getCookie('entertainment_scroll_position');
				}, 'json');
				
$.get('https://rawcdn.githack.com/mumunin/filo/cdd765839b070a0075333ece3e16c7f628706ba6/events.json'+_timeMinute(), {"_stamp":_timeMinute()}, function(jsonData){
					$('#events_container').html('');
					var _listEventHtml = '';
					if(jsonData.length > 0){
						for(var _x=0,_len=jsonData.length;_x<_len;_x++){
							var _infoEvent	 = jsonData[_x].nama_event+"\r\n"+'      '+_timePure(jsonData[_x].jadwal_event)+' | '+jsonData[_x].player_1+' vs '+jsonData[_x].player_2+"\r\n";
								_infoEvent 	+= '      Link: https://dutk.fun/j'+jsonData[_x].id_event;								
								_infoEvent	 = btoa(_infoEvent);
							_listEventHtml	+= '<div class="event_wrapper"><a data-url="/?m=1'+jsonData[_x].id_event+'-'+_slugify(jsonData[_x].nama_event)+'-'+_slugify(jsonData[_x].player_1)+'-vs-'+_slugify(jsonData[_x].player_2)+'.html" href="/?m=1'+jsonData[_x].id_event+'-'+_slugify(jsonData[_x].nama_event)+'-'+_slugify(jsonData[_x].player_1)+'-vs-'+_slugify(jsonData[_x].player_2)+'.html" data-info="'+_infoEvent+'" class="copy_button">&nbsp;</a>';
							_listEventHtml	+= '<a title="'+jsonData[_x].nama_event+' - '+jsonData[_x].player_1+' VS '+jsonData[_x].player_2+'" id="event_'+jsonData[_x].id_event+'" data-iptv="'+btoa(JSON.stringify(jsonData[_x]))+'" class="list_event '+(_idEvent==jsonData[_x].id_event?'active':'')+'" data-id="'+jsonData[_x].id_event+'" href="/id/live-match-'+jsonData[_x].id_event+'-'+_slugify(jsonData[_x].nama_event)+'-'+_slugify(jsonData[_x].player_1)+'-vs-'+_slugify(jsonData[_x].player_2)+'.html" data-url="/id/live-match-'+jsonData[_x].id_event+'-'+_slugify(jsonData[_x].nama_event)+'-'+_slugify(jsonData[_x].player_1)+'-vs-'+_slugify(jsonData[_x].player_2)+'.html">';
							_listEventHtml	+= '	<div style="width:100%">';							
							_listEventHtml	+= '			<div class="nama_event" style="margin-bottom:3px!important;font-weight:'+(_idEvent==jsonData[_x].id_event?'500':'400')+'" data-name="'+jsonData[_x].nama_event+'" data-time="'+jsonData[_x].jadwal_event+'"><span style="font-weight:500">'+jsonData[_x].nama_event+'</span></div>';
							_listEventHtml	+= '			<div class="text_event" data-url="/?m=1'+jsonData[_x].id_event+'-'+_slugify(jsonData[_x].nama_event)+'-'+_slugify(jsonData[_x].player_1)+'-vs-'+_slugify(jsonData[_x].player_2)+'.html" style="color:#898989;margin-bottom:10px;font-size:12px;text-decoration:none;">'+_middleEllipsis('/?m=1'+jsonData[_x].id_event+'-'+_slugify(jsonData[_x].nama_event)+'-'+_slugify(jsonData[_x].player_1)+'-vs-'+_slugify(jsonData[_x].player_2)+'.html')+'</div>';
									
							_listEventHtml	+= '		<div style="display:flex;width:100%;" class="fixture">';
							_listEventHtml	+= '			<div class="child_1" style="flex-grow:2;">';
							_listEventHtml	+= '				<div class="flex" style="display:flex;margin-bottom:10px">';
							_listEventHtml	+= '					<div style="width:15px;border:0px solid;height:15px;margin-right:15px;" class="me-3">';
							_listEventHtml	+= '						<img style="max-width:20px!important;border-radius:2px!important" alt="'+jsonData[_x].player_1+'"  src="'+jsonData[_x].logo_1+'" height="15px" />';
							_listEventHtml	+= '					</div>';
							_listEventHtml	+= '					<div style="flex-grow:2">';
							_listEventHtml	+= '						<div style="">';												
							_listEventHtml	+= '								<div class="player_event line-1" style="font-weight:'+(_idEvent==jsonData[_x].id_event?'500':'400')+'">'+jsonData[_x].player_1+'</div>';
							_listEventHtml	+= '						</div>';
							_listEventHtml	+= '					</div>';
							_listEventHtml	+= '				</div>';
							_listEventHtml	+= '				<div class="flex" style="display:flex">';
							_listEventHtml	+= '					<div style="width:15px;border:0px solid;height:15px;margin-right:15px;" class="me-3">';
							_listEventHtml	+= '						<img style="max-width:20px!important;border-radius:2px!important" alt="'+jsonData[_x].player_2+'" src="'+jsonData[_x].logo_2+'" height="15px" />';
							_listEventHtml	+= '					</div>';
							_listEventHtml	+= '					<div style="flex-grow:2">';
							_listEventHtml	+= '						<div style="">';
							_listEventHtml	+= '								<div class="player_event line-1" style="font-weight:'+(_idEvent==jsonData[_x].id_event?'500':'400')+'">'+jsonData[_x].player_2+'</div>';
							_listEventHtml	+= '						</div>';
							_listEventHtml	+= '					</div>';
							_listEventHtml	+= '				</div>';
							_listEventHtml	+= '			</div>';
							_listEventHtml	+= '			<div style="width:100px;text-align: right">';
							_listEventHtml	+= '				<div data-target="#event_'+jsonData[_x].id_event+'" class="tanggal_event" style="font-size:13px;" data-time="'+jsonData[_x].jadwal_event+'" data-stop="'+jsonData[_x].jadwal_stop+'">&nbsp;</div>';
							_listEventHtml	+= '				<div class="waktu_event" style="font-size:13px;" data-time="'+jsonData[_x].jadwal_event+'">&nbsp;</div>';
							_listEventHtml	+= '			</div>';
							_listEventHtml	+= '		</div>';
							_listEventHtml	+= '	</div>';
							_listEventHtml	+= '</a>';
							_listEventHtml	+= '</div>';
						}
					} else {
						_listEventHtml = '<div class="event_wrapper"><div style="margin-top:50px;height:200px;background:url(/engine/pwa/img/no-event.png); background-size:cover;background-repeat:no-repeat;background-position:center;"></div><div style="text-align:center;font-size:18px;color:#8A8A8A;padding:10px 30px 5px;font-weight:bold;">Oops!, No events for now</div><div style="text-align:center;font-size:14px;color:#8A8A8A;padding:0px 30px;">Watch this space for upcoming events!</div></div>';
					}
					$('#events_container').html(_listEventHtml);					
					_reformatTime();
					_initDuktekSports();
					/* Scroll Position */					
					document.getElementById('events_container').scrollTop 			= getCookie('event_scroll_position');					
				}, 'json');
			}
			_simmerLoading();			
			setInterval(function(){				
				_reloadMenu();
			}, 7200000);
			setInterval(function(){			
				_reformatTime();
			}, 10000);