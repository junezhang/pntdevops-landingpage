			$(document).ready(function() {
			$('#introtext').dialog({autoOpen:false,modal: true,width:600,closeText:''});
			$('.ui-widget-overlay').live('click',function(){$('#introtext').dialog("close")});
			$('#getservice').dialog({autoOpen:false,modal: true,width:600,closeText:''});
			$('.ui-widget-overlay').live('click',function(){$('#getservice').dialog("close")});
			});
			function allClicked()
			{
				$('#taball').addClass('active');
				$('#tabproduction').removeClass('active');
				$('#tabhosted').removeClass('active');
				$('#tabpingnpower').removeClass('active');
				$('#tabtechpreview').removeClass('active');
				$('.cell').css({'display':'inline-block'});
			}
			function productionClicked() 
			{
				$('#taball').removeClass('active')
				$('#tabproduction').addClass('active')
				$('#tabhosted').removeClass('active')
				$('#tabpingnpower').removeClass('active');
				$('#tabtechpreview').removeClass('active')
				$('.production').css({'display':'inline-block'})
				$('.hosted').css({'display':'none'})
				$('.pingnpower').css({'display':'none'})
				$('.techpreview').css({'display':'none'})
			}
			function hostedClicked()
			{
				$('#taball').removeClass('active')
				$('#tabproduction').removeClass('active')
				$('#tabhosted').addClass('active')
				$('#tabpingnpower').removeClass('active');
				$('#tabtechpreview').removeClass('active')
				$('.production').css({'display':'none'})
				$('.hosted').css({'display':'inline-block'})
				$('.pingnpower').css({'display':'none'})
				$('.techpreview').css({'display':'none'})
			}
			function pingnpowerClicked()
			{
				$('#taball').removeClass('active')
				$('#tabproduction').removeClass('active')
				$('#tabhosted').removeClass('active')
				$('#tabpingnpower').addClass('active');
				$('#tabtechpreview').removeClass('active')
				$('.production').css({'display':'none'})
				$('.hosted').css({'display':'none'})
				$('.pingnpower').css({'display':'inline-block'})
				$('.techpreview').css({'display':'none'})
			}
			function techpreviewClicked()
			{
				$('#taball').removeClass('active')
				$('#tabproduction').removeClass('active')
				$('#tabhosted').removeClass('active')
				$('#tabpingnpower').removeClass('active');
				$('#tabtechpreview').addClass('active')
				$('.production').css({'display':'none'})
				$('.hosted').css({'display':'none'})
				$('.pingnpower').css({'display':'none'})
				$('.techpreview').css({'display':'inline-block'})
			}
