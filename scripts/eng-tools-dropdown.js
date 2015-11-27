$(document).ready(function() {
    $('#ESO-slide-button').append('\
<div id="all-tools-dropdown" class="clickmenu-body">\
  <a href="https://engineering.redhat.com/">\
    <div class="cell production" id="home">\
      <div class="icon"/>\
      <div class="title">Tools Home</div>\
    </div>\
  </a>\
    <a href="https://docs.engineering.redhat.com">\
  <div class="cell docs-tools" id="Confluence">\
    <div class="icon"/>\
    <div class="title">PnT Confluence</div>\
  </div>\
</a>\
  <a href="https://projects.engineering.redhat.com">\
  <div class="cell project-tools" id="jira">\
    <div class="icon"/>\
    <div class="title">PnT JIRA</div>\
  </div>\
</a>\
  <a href="https://beaker.engineering.redhat.com/">\
  <div class="cell testing-tools" id="beaker">\
    <div class="icon"/>\
    <div class="title">Beaker</div>\
  </div>\
</a>\
  <a href="https://bugzilla.redhat.com/">\
  <div class="cell project-tools development-tools testing-tools" id="bugzilla">\
    <div class="icon"/>\
    <div class="title">Bugzilla</div>\
  </div>\
</a>\
  <a href="http://errata.devel.redhat.com/">\
  <div class="cell development-tools testing-tools release-tools" id="erratatool">\
    <div class="icon"/>\
    <div class="title">Errata Tool</div>\
  </div>\
</a>\
  <a href="https://people.engineering.redhat.com/">\
  <div class="cell miscellaneous" id="people">\
    <div class="icon"/>\
    <div class="title">People</div>\
  </div>\
</a>\
  <a href="http://engineering.redhat.com/pp">\
  <div class="cell project-tools" id="productpage">\
    <div class="icon"/>\
    <div class="title">Product Page</div>\
  </div>\
</a>\
  <a href="https://engineering.redhat.com/pnt/">\
  <div class="cell docs-tools" id="portal">\
    <div class="icon"/>\
    <div class="title">PnT Portal</div>\
  </div>\
</a>\
  <a href="https://engineering.redhat.com/rt/index.html">\
  <div class="cell project-tools" id="rt">\
    <div class="icon"/>\
    <div class="title">Request Tracker</div>\
  </div>\
</a>\
  <a href="http://brewweb.devel.redhat.com/">\
  <div class="cell release-tools" id="brew">\
    <div class="icon"/>\
    <div class="title">Brew</div>\
  </div>\
</a>\
  <a href="https://vault.engineering.redhat.com/">\
  <div class="cell process-tools" id="vault">\
    <div class="icon"/>\
    <div class="title">Vault</div>\
  </div>\
</a>\
  <a href="https://engineering.redhat.com/metrics/">\
  <div class="cell project-tools" id="ackview">\
    <div class="icon"/>\
    <div class="title">ACK View</div>\
  </div>\
</a>\
  <a href="http://brewtap.app.eng.bos.redhat.com/">\
  <div class="cell testing-tools" id="bewtap">\
    <div class="icon"/>\
    <div class="title">BrewTap</div>\
  </div>\
</a>\
  <a href="https://support.engineering.redhat.com/">\
  <div class="cell process-tools" id="charnet">\
    <div class="icon"/>\
    <div class="title">Charnet</div>\
  </div>\
</a>\
  <a href="http://pkgs.devel.redhat.com/cgit/">\
  <div class="cell release-tools" id="distgit">\
    <div class="icon"/>\
    <div class="title">dist-git</div>\
  </div>\
</a>\
  <a href="https://code.engineering.redhat.com/">\
  <div class="cell development-tools" id="gerrit">\
    <div class="icon"/>\
    <div class="title">Gerrit</div>\
  </div>\
</a>\
  <a href="https://maitai.engineering.redhat.com">\
  <div class="cell process-tools" id="maitaiv1">\
    <div class="icon"/>\
    <div class="title">Maitai 1 - BPMS5</div>\
  </div>\
</a>\
  <a href="https://maitai-bpms.engineering.redhat.com">\
  <div class="cell process-tools" id="maitaiv2">\
    <div class="icon"/>\
    <div class="title">Maitai 2 - BPMS6</div>\
  </div>\
</a>\
  <a href="https://pkgwrangler.eng.bos.redhat.com">\
  <div class="cell testing-tools" id="wrangler">\
    <div class="icon"/>\
    <div class="title">Package Wrangler</div>\
  </div>\
</a>\
  <a href="https://pdc.engineering.redhat.com/">\
  <div class="cell release-tools" id="pdc">\
    <div class="icon"/>\
    <div class="title">PDC</div>\
  </div>\
</a>\
  <a href="https://pelc.engineering.redhat.com">\
  <div class="cell testing-tools" id="pelc">\
    <div class="icon"/>\
    <div class="title">PELC</div>\
  </div>\
</a>\
  <a href="https://analytics.engineering.redhat.com/piwik">\
  <div class="cell miscellaneous" id="piwik">\
    <div class="icon"/>\
    <div class="title">Piwik App Analytics</div>\
  </div>\
</a>\
  <a href="http://pub.devel.redhat.com/pub/home">\
  <div class="cell release-tools" id="pub">\
    <div class="icon"/>\
    <div class="title">Pub</div>\
  </div>\
</a>\
  <a href="https://errata.devel.redhat.com/errata/rdiffcontrol.cgi">\
  <div class="cell testing-tools" id="rpmdiff">\
    <div class="icon"/>\
    <div class="title">RPMDiff</div>\
  </div>\
</a>\
  <a href="http://svn.devel.redhat.com">\
  <div class="cell development-tools" id="svn">\
    <div class="icon"/>\
    <div class="title">SVN</div>\
  </div>\
</a>\
  <a href="https://tcms.engineering.redhat.com/">\
  <div class="cell testing-tools" id="nitrate">\
    <div class="icon"/>\
    <div class="title">Nitrate</div>\
  </div>\
</a>\
  <a href="http://nest.test.redhat.com/mnt/tpsdist/">\
  <div class="cell testing-tools" id="tps">\
    <div class="icon"/>\
    <div class="title">TPS</div>\
  </div>\
</a>\
  <a href="https://engineering.redhat.com/trac/">\
  <div class="cell docs-tools" id="trac">\
    <div class="icon"/>\
    <div class="title">Trac</div>\
  </div>\
</a>\
  <a href="http://git.engineering.redhat.com/">\
  <div class="cell development-tools" id="git1">\
    <div class="icon"/>\
    <div class="title">User Git</div>\
  </div>\
</a>\
  <a href="https://vdb.engineering.redhat.com/">\
  <div class="cell miscellaneous" id="vdb">\
    <div class="icon"/>\
    <div class="title">Virtual DB</div>\
  </div>\
</a>\
  <a href="http://w3c.englab.bne.redhat.com/w3c-validator/">\
  <div class="cell development-tools" id="w3c">\
    <div class="icon"/>\
    <div class="title">W3C Validator</div>\
  </div>\
</a>\
  <a href="https://zabbix.infra.prod.eng.rdu2.redhat.com/zabbix/">\
  <div class="cell miscellaneous" id="zabbix">\
    <div class="icon"/>\
    <div class="title">Zabbix Monitoring</div>\
  </div>\
</a>\
  <a href="https://translate.engineering.redhat.com/">\
  <div class="cell miscellaneous" id="zanata">\
    <div class="icon"/>\
    <div class="title">Zanata</div>\
  </div>\
</a>\
 </div>');


$('head').append('<style>\
.toparea-wrap{position:relative;top:0; left:0; width:100%;z-index:999;}\
#all-tools-dropdown{right:5px;margin-right:0;width:480px; padding:10px;display:none;top:40px;}\
#all-tools-dropdown:after{right: 50px; top: -28px;}\
#tools-link.active{opacity:1;color:#222; text-shadow: 0 0 6px #8DD6FF;}\
.cell .title{    display: inline-block;height: 12px;line-height: 12px;position: relative;top: -10px; margin-top: 1em;}\
.cell{	padding:2px;	float:left;	width:68px;	height:55px;text-align:center;	margin:2px; font-size:12px;}\
.cell:hover{    background-color: #F6F6F6;    box-shadow: 0 0 0 1px #A2DDFF, 0 0 2px #DDDDDD;}\
#all-tools-dropdown a, #all-tools-dropdown a:visited, #all-tools-dropdown a:hover{	color:#555!important;}\
.cell .icon{height:40px;width:50px;margin-left:auto;margin-right:auto;opacity:0.7;background-position:center center;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACdQTFRF////////gICAlZWVlJSUlJSUlZWVk5OTlJSUlJSUk5OTlJSUlJSUyml2fwAAAAx0Uk5TAAEEKUxyf4Czy+b37jHhwgAAAGdJREFUGNNjYKAFUMlY1e6E4DLPOXPmzEkDGJcx+gwIbBWA8lnPQEAAlG8N5W+GcJnmQPknFcB8ljMw4ADms8H5CWA+B5zfAOZzwfkLsPLR1aObh24funvQ3YvhH3T/oocHRnhREQAAmS56VSUojS8AAAAASUVORK5CYII=);}\
.cell#home .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAFRQTFRF////qqqqkpKSnZ2dmZmZlZWVk5OTlZWVlJSUk5OTlJSUk5OTlZWVlJSUlJSUlJSU////lJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSU4eHh////ewHwawAAABl0Uk5TAAMHDRQdKDVDU2R2iZusuLi8ytfi6/L4/NUzPUcAAAB8SURBVCjP7dK5EoAgDEVRV3BDBdcn//+fbqMDGAo7C2+ZM5NJkSB4USRE5NdUASr1aTZga8hoLWcczSWBcY27OnaVdTDqmK35CKsxNzCs8KgKL00kiGRyKu9B1vNdiwmepuLa/zTr8s/zorcWL+ujn+8alxvi19tdW3OyAiwVLduWnPdUAAAAAElFTkSuQmCC)}\
.cell#performance .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPNQTFRF////////qqqqv7+/29vbzMzM0dHRzMzM0tLSycnJzMzM0dHRzMzMj4+P0tLS0NDQ0NDQlJSUmZmZ0NDQ0dHRpaWl0NDQ0NDQqampz8/Pz8/Prq6u0NDQ0dHRtra2z8/Pz8/Pz8/Pubm50NDQ0dHRz8/P0NDQvr6+wMDA0NDQwcHBw8PD0NDQ0NDQxcXF0NDQ0dHRlJSUz8/PlJSU0dHRycnJ0NDQ0NDQy8vL0NDQ0NDQy8vL0NDQlJSUzc3N0NDQ0NDQ0dHR0NDQzs7Ozs7O0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQlJSU0NDQlJSU0NDQcQ6fpwAAAE90Uk5TAAIDBAcKCw8RExkcHiIoKzxDRkZOUlZXWVtgYWxvdHV2e3yDhIaJjY2UlZycnqissLGxsrW3t73JyszP09TW2t/h5OXo6O309ff5+vz9/qGi6aEAAADhSURBVCjPhZPncsIwEIQBU0LHQOi9hRbA9F5Ch8Te938aNENzsE/sH2n0jWZPdyuD4Y0kiYsVRfc4mRY42HVAnYNbOHtvWNQqBzREN3XbssTKQpdWBIJ05Z4T2s+HaZwnOEbYQnhHgQzdFtsWU4HGFcg+dVPVtvHaXEbvun/1NpUWYNrZ9UcSZux3kHASExtjFbNrBnr3TQFldR0v3n1szWQcTCEgS6XFUfgB9h96mNl8rlnRm6//rX94W0dAM2Akoih0gTyd1DrwTQdZrMpDv07gHt4BK+cbkOowPPvjYq4un4xBGIP2PyoAAAAASUVORK5CYII=);}\
.cell#people .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAEJQTFRF////////gICAk5OTlZWVlZWVkpKSlJSUlZWVlZWVk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUAmJeAAAAABV0Uk5TAAEGGh0wMUNSZY6YnaKrs7/X2Ob+119wIgAAAH5JREFUKM/d0EkOwyAMQNHMCZkggX//q2aTmFa4crvtX1l6MgKq6utq52P0rta1DQAQWnX3VgjavkNyCvvMXuGYOf7OxuHG1YyHGd9ifGo3PNPQFTidLM+8cE5v2GzA3t/twNa88EzRnHVMJadReEVpFT40PoSTxkkYtf/nz12ZziGJm0cjvAAAAABJRU5ErkJggg==)}\
.cell#product .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJZQTFRF////gICAmZmZkpKSmZmZkJCQlZWVl5eXlZWVlJSUl5eXlZWVkZGRk5OTkpKSlJSUlpaWlpaWk5OTkpKSk5OTlZWVlZWVk5OTlZWVlJSUlZWVlJSUlJSUlZWVlZWVlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUNQRgkQAAADF0Uk5TAAIFDg8XGBsdHyAkJSgqKy4zND1XWWdvcXJzfH5/kJ2usbnR4OLk6ers7e7x8/v8/uEgL2gAAACQSURBVCjP7dI3EsJAEETRjxcgvPcyGAFyff/LEUCRaCggIuGnr7Z6goX3VVtGlQeOwlxGeTgCGKZ6UToEAh0n5eJgebxXAMRa2hdNFQNSz+aGBEgdm+t//hn3bW5KQKS1zQtFgKfz3KkVcmYneUA7efXXkjaA618tvPguXzTY3Ft1LS09Jw7m611212z78eANk8spzeN8d3cAAAAASUVORK5CYII=)}\
.cell#beaker .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAV9QTFRF////////gICAgICAmZmZkpKSi4uLlZWVmZmZj4+PkJCQmZmZlZWVmZmZkpKSkZGRlpaWk5OTl5eXk5OTlpaWk5OTkpKSk5OTlZWVlJSUkpKSlJSUk5OTlZWVlpaWlJSUk5OTlJSUlJSUk5OTk5OTkZGRk5OTlJSUk5OTlJSUlJSUlJSUlZWVlJSUk5OTlZWVlJSUlZWVlJSUk5OTlJSUlJSUlJSUlJSUk5OTlJSUlZWVk5OTlJSUlJSUzs7OlJSUy8vLlJSUlZWVk5OTlJSUlJSUlJSUk5OTlZWVk5OTlJSUlJSUlZWVlJSUlJSUlJSUlZWVlZWVlJSUlJSUmJiYlJSUlJSUlJSUo6OjlJSUlJSUlJSUnJyclJSUlJSUoKCglZWVlJSUoKCglJSUmpqalJSUlZWVsbGxlJSUlpaWm5ubnp6eoaGhqKiot7e3wMDAxcXFysrKy8vLzc3Nzs7Ol8B+pgAAAGh0Uk5TAAECBAUHCwwPEBcZHR4jJScoLC04Oz1AQUNERUdIS1FVVlhcY2Roa21ucHJ9foCCiIuNjo+RkpahpKitrrCwsrK1trm8vb7AwsTEy9HU1tfY2t7f3+Di5OXo6e7w8vT09/r6+/v+/v7mhaX5AAABAUlEQVQoz8XSVzcDcRDG4XdFCEGsHmJF1CBED0F00VZv0furt/3+x4Uc5x+7k5M7v9vnZs7MABm5NGSpZX+jRlbXgW7My6xtGeG4zHm1i3Fdwur1vWZ4IxGvMy80VW57UtFoqtCRJ9vrzbYYEGt15IqZlTp/UtOSfnm6hGkmsm1GF0cvGSwCfAMFAncyCPSwQeAuhoBeNv4HdzME9Im8zA5gjKPCq3DTDZQeX1c5adnpWTkAGNzx2DV/lelLDXPczv08nPpp+oS2kwZubz6sdO8PF3/uUnx092b99so1d8aLzvHeUnrhiMphnn+p/PnIgMJLl7tXz2pPnFV4iLYmkEPf52dKzN/hAM8AAAAASUVORK5CYII=);}\
.cell#bugzilla .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAnNQTFRF////////gICA////qqqqgICAmZmZgICAn5+fjo6OmZmZi4uLlZWVnZ2dkpKSmZmZj4+PlpaWlJSUmZmZkpKSl5eXmZmZl5eXkpKSlZWVkZGRlJSUk5OTlpaWkZGRlJSUk5OTlZWVlJSUl5eXk5OTkpKSlZWVtbW1kpKSlJSUk5OTkpKSlZWVlZWVkpKSk5OTk5OTlZWVk5OTlJSUlJSUlJSUk5OTk5OTk5OTlpaWlJSUlJSUlJSUlZWVlZWVlJSUlZWVlJSUlJSUlZWVlJSUk5OTlZWVlZWVk5OTlJSUk5OTlZWVlJSUlZWVlJSUlJSUk5OTlJSUk5OTlZWVlJSUlZWVlJSUk5OTlJSUk5OTlZWVvLy8lJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUk5OTlZWVk5OTlZWVlZWVlJSUlJSUlJSUk5OTlJSUlJSUlZWVlJSUlJSUu7u7k5OTlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUw8PDlJSUlpaWlJSUlJSUlJSUlJSUmZmZlJSUlJSUlJSUubm5lJSUlJSUwMDAlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foaGhoqKio6OjpKSkpaWlpqamqampq6urrKysrq6ur6+vsLCwsbGxsrKys7OztLS0tbW1tra2t7e3uLi4ubm5urq6u7u7vLy8vr6+v7+/wMDAxMTExsbGx8fHyMjIycnJysrKy8vLzMzM3t7e4ODg4uLi5OTk5eXl8fHx9fX1+Pj4+fn5/Pz8////wSkq4AAAAJd0Uk5TAAECAgMEBQYICQoLDA0ODxARExQVFhkbHB0eHyEiJSYoKSssLS8wMDEyNDY6PD1AR0hJSkxPUFNVVVZYX2BjZGVpa2xub3FzdHV2eHx9foGChoeHiIuMjo+QkJGSk5SWmZ2fpKapq6ytr7S2u7zDxsfIy87Q0dHT1dbY2drf4uTl5ujq6+zt7u7w8fLz9PX5+vv8/P3+/vpbgfEAAAHbSURBVBgZlcGJW4txAAfwr5lyNeTK5CjMTe77KIkQInfu+8xyL0cyR3L0TvN9u5jmTIhGiEL7mbv3T/K2t9mi530enw/+R6+J0NPVCl2ZnaFn4zhozNH4myV5uX1mFPxW70JAJBqNttFvzzCoDs9FwNLFABYUUGObiraIc1oQYNw7GZOoOTXDOHB31lYp3YA/TNaD+WyUHR/Wd1sBmTEAzSyiyj6vXe/NDtcdkklo5jiZmxIx+Oh1ljc0VJHSkFnWVbFoEu64mtolcsUNUck6RfGRtJ1N3e9cD0302u6dluTRJepLHv1SvCRPhgN9LGjSYeFF+cv3+69EFe+Wy/Q8YAyCBuWQRYpSe9vrvUXV+womQ7NsBMISHCTffS6jR7ykZs3K8zviDIjYmX/i9IVD1JTWe12kTDLLOnvLtU0Aus1PaJ9I2eOm6rmoZrVSR6YAMJmhMTtrlB8sdbHkkyirVXzkHIQwHXih/Cx+6iOfibfyazelnggan3Mks+IhKZPFH4Wb5HaEyNhgjLJT9eZb4RNRQ3IkgjpKw4FR2SQrvxYVfhD3mIYQY660ATD2DP0ei5vxCGXoByBNSp+yL5fk5UvrWuMf56YDaNV/2lAjWhDDHtAx4Rh0GdCC32Xa0Ln0Oe0FAAAAAElFTkSuQmCC);}\
.cell#brew .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAATJQTFRF////////gICA////qqqqgICAgICAjo6OmZmZlZWVmZmZj4+PlJSUjIyMmZmZkpKSkJCQlZWVl5eXkpKSlZWVl5eXk5OTlpaWlZWVmJiYlJSUk5OTl5eXmJiYlJSUkpKSk5OTkpKSkpKSlZWVk5OTlJSUlJSUlJSUk5OTlZWVk5OTlZWVlJSUk5OTk5OTlJSUlJSUlJSUlJSUkZGRk5OTlZWVlJSUlJSUlZWVlZWVk5OTlJSUk5OTlJSUlJSUk5OTlJSUlZWVlJSUlJSUlJSUlJSUk5OTlJSUlZWVlJSUlJSUlZWVlZWVlJSUlJSUlZWVlZWVlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlZWVlJSUFIHWywAAAGV0Uk5TAAECAgMEBgkKDA8QExQUFRcYGxwdICEiJCUmKDE0Nzg7PURISUpPUVNUV2Bpam1wcnV3goKEjY+QkZOZmqCkpqyvsLG3uLm6u72+wsfIy8zO3N/j5e3v8PHz9fb3+Pr7+/z9/v4kvZ7WAAABFElEQVQoz93SV1PCQBQF4ANGMIgFBUtExC6iYm8oiKKuGgtiIZZF0fP//4IP0UDaDM+ep539ZmfO3LtAG9EOr7b71i6OpoIr58dzkV67jhgkayS/zkiSvB5q5QM6cxOwMLRYcTGzll/SK7t/tTyVtS6T+2Xz7ptkwzxWO3+f75MPOnl7T548Uhbe+ErKJatbgwNITSI4O4bwQgzRjCo5jhaOOcYkmbDz8HwEmJhWoMykPHhHZBEqiySSohyC5GYut7reYXFeLEMVIo20ECo+zPZFH5a80/Vn5n05AZxy7x/yi2F8suDDdXNqGxZviQyUktCgiZLiXkl4NAD0DAKIR10b07rtsbHXT4w3uVJ/cuS9irbyA7lElb/b/z4zAAAAAElFTkSuQmCC);}\
.cell#trac .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAXFQTFRF////////gICAqqqqgICAmZmZgICAkpKSjo6OlZWVkpKSj4+PlpaWmZmZl5eXlZWVl5eXlZWVkZGRl5eXk5OTlpaWlJSUlpaWk5OTlZWVlJSUk5OTlZWVkpKSlJSUlZWVlZWVk5OTlZWVk5OTlpaWlJSUlZWVk5OTlJSUlZWVk5OTlJSUk5OTlZWVk5OTlZWVk5OTlJSUlZWVlJSUk5OTlZWVlJSUk5OTlZWVlJSUlZWVlJSUlJSUlZWVk5OTlZWVlJSUlJSUk5OTk5OTlJSUlJSUlZWVlJSUk5OTlZWVlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUk5OTlJSUlZWVlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSU47XtEQAAAHp0Uk5TAAECAwQFBgcJDA4QERQWGBsdHiAhIiYnKCkrLTU2NzxBQkZJS0xNTk9UVVZXWVpbXF1eX2FlZm9xcnN5fn+Ai4+Rk5WWm5yfoaOlp6iprK6ws7S1tre4ubq8w8jJzM/Q1dbX2Nrb3+Ll6Orr7O3v8fLz9Pb5+vv8/f6ut7PxAAABHElEQVQYGa3BZztCYQAG4KdDiBNlnYNkZISEEEUyM5O9skd2iMLz67Wuy3hPPnXfyIumFRv+ccaECdomZ614JAfRpkBUR7407JLOPkZNEJTdk0H1+Lpok2yHaIjcACSskp3QUO9TkWSJruvwV2FwvxsomDgKe2U9BOZP0o5lJt12QRQgwxZmuCEwrj2MO5lxAU3DTLk7cSBF73fjl1GSM2ZkjZH9+Mn6EetFWst0K+bJECpVfKs2IeOUdHnJPTnCDoi2yaeSA9oHyDmIlDfGZchwkEvQoPhGkGSIPCsQ9Gy5ioHGxR2PuRyiQ3IKtjjJmEeCwEkmKq6YtgCBLvB+LjOrFiJJMjLtNShBSxXJS7sBORhuGCpFbjXNyIsvxgZQvqwZNQcAAAAASUVORK5CYII=);}\
.cell#wrangler .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAOdQTFRF////////gICAqqqqgICAmZmZgICAkpKSlpaWnJyclJSUjIyMmZmZkpKSl5eXkJCQm5ubmZmZl5eXlpaWlZWVk5OTkJCQlpaWlZWVkpKSl5eXlJSUk5OTlpaWlZWVlZWVlJSUlZWVlZWVlJSUlJSUlJSUlZWVlJSUlZWVk5OTlJSUlJSUlZWVlZWVlZWVlZWVlJSUlZWVlZWVlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlZWVk5OTlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUk5OTlJSUlJSUlJSUoCO+PQAAAEx0Uk5TAAECAwQFBgcREhMUFBUWFxcZGycpLS4uMDE2N0BETVRYW15iaYGEiIuOkpuoqq+2uLm7vcDF0dTX2dzf5uju7/Dx8/T29/j5+fv8/btnBVgAAADzSURBVCjPldNpU8IwEAbg5ahyitzQKKIIyqUICHgrQkHZ//97aCFZkyYdxvdTZp7JZjeZAPwrseZrNxATrS/ExwBM38wRnxtRI2ZuvxGfriJGzLYXiLNLM+Y6S8RpPQwQLVd4qsfE7pmTi5C36iLljfhnc83L1u4Hu4zG+EnsrFkhLJ+WtG1pt+OUFU/aLK2wJbunoDBI7moKfPzne/WzcK4a712ozmCVWFGogcGqMHYCgexWpv51du/qtCRc411XlnA/857F/D6mibirTCpcYUm5K+y9Eciel3j1O7zryekPHvCD+AUNeSc+YmdazuOHv9wWBfk5ENndUqAAAAAASUVORK5CYII=);}\
.cell#vdb .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAdRQTFRF////gICAgICAkpKSkpKS2dnZlZWVkZGRlJSUlpaWlJSUk5OTl5eXk5OTlpaWkpKSlJSUlZWVlJSUlJSU7OzslJSUlZWVlZWVk5OTrq6ulZWVk5OTlJSUlJSUk5OTlZWVlJSUk5OTlJSUlJSUlJSUlZWVlJSUq6urm5ublJSUuLi4urq6lJSUlJSUlJSUlJSUrq6uyMjIk5OT3Nzc5+fnlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUvLy8oKCgqKiorKysnp6et7e3lJSU9PT0zMzM0NDQz8/PlJSUlZWVlpaWl5eXmJiYmZmZm5ubnJycnZ2dnp6en5+foKCgoqKio6OjpKSkpaWlp6enqKioqampq6urrKysra2trq6usLCwsbGxsrKys7OztbW1tra2t7e3ubm5urq6u7u7vb29vr6+v7+/wMDAwcHBw8PDxMTExcXFxsbGx8fHyMjIycnJy8vLzMzMzs7O0NDQ0dHR0tLS09PT1dXV19fX2NjY2dnZ2tra3d3d39/f4ODg4uLi5OTk5eXl5ubm5+fn6Ojo6enp6urq7Ozs7e3t7u7u7+/v8PDw8/Pz9fX19/f3+Pj4+fn5/f39/v7+////6R8BdgAAAEt0Uk5TAAQGBw4UHR4fIiYoLDQ4PUNGSkxQUVJgaG5xdnl+h4mRk5SYmZylpq2usbGys7W6vL3AwMLI0Nve4ubx8vP3+Pj5+fn6+vv7/Pz+JjNBtQAAAWxJREFUKM9jYIADDn4xCVl5aXEhXhYGNMAsqGDuDQduRtI8yLLClt7oQI8dJsmq4Y0F2EpCpU38sEl7O4hApN1zsEq3G0OkvSaFYJFNnW0AkXaZOi0dXdKvenajMkTaPrBuVnsesgmxFZOnZXvDpIH86omze+orCjKSs4qqGqfM7CgO8kaSBoLwvIr6lu7+juaasvQAsAiKNCaASrvikNaCSHuEYZVN0YZIO06sxvR4RGMdzG6/wiltJXG+cCn/xNK27kQkp/knV3ZNn9Td2lDb1NYzaWpLYQyGy31Do5Myc9ITooJQXU7AY044pNUh0p4+WGUjDSHSzn1pmJJ++W0qULujWvpK4pGTTEBS+YSyAITT4iq7Z3Q2VpflZxeUVTf2An0WDHeaLTQsMgvKq+urSnIzoiFmKEKklXG4nA8izWmLVVYPltDZdDEl7WQYEdlEVNMGRdJCiQs1lzEJyKnpm1lZW5jqqEpxw0QBEXHZgQWT1ywAAAAASUVORK5CYII=);}\
.cell#rt .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAL1QTFRF////////gICAqqqqgICAgICAkpKSjo6OmZmZl5eXl5eXlpaWsbGxlZWVkpKSlJSUkpKSlJSUlpaWlJSUk5OTk5OTlJSUlZWVsrKylJSUlJSUlZWVk5OTlJSUs7OzlJSUlJSUk5OTk5OTlZWVlJSUlZWVk5OTlJSUlJSUlJSUlZWVlJSUlJSUsrKylJSUlJSUk5OTk5OTlJSUlJSUlZWVlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUs7OzYIeoCgAAAD10Uk5TAAECAwQGBwkKFhsiJCkqKzEyODlASVFbYGRmbG9weHx+gIeJjJCTmJ2fqLCxt7i6wObr7/Lz9Pb3+fv9/jJQ2+cAAAC3SURBVCjPpZPFEsJAEAUnuLsEC+4eJFjz/5/FheIQdpNQ9LWrtmbfmxHxIWNqyYiI+dRiBtJrS8H6oy3VTJZep0JeOrefG3pdsGGq1aUDQEujKyeAbUKtqw7AKqZ+vHYFWETck3fKIiL1G8As5P53j0NRpHEHmBjuWIaAnW8/AAZfqYWXAEcAuopQoxvedJSZx3cA3JuaSpJngLG2sfQFRh6FZp2+Z9+RoOvwk/ZZxT/23OeIPHkBPqJY/c2fCKMAAAAASUVORK5CYII=);}\
.cell#piwik .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAapQTFRF////////qqqqgICAmZmZgICAn5+fmZmZi4uLlZWVnZ2dkpKSmZmZlpaWjo6OlJSUkpKSl5eXkJCQmZmZk5OTl5eXkpKSlZWVkZGRl5eXkpKSlZWVlJSUlpaWlJSUk5OTlJSUk5OTkpKSlZWVk5OTlZWVlpaWk5OTk5OTk5OTlZWVlJSUk5OTlJSUlJSUlZWVk5OTk5OTlZWVk5OTlJSUlJSUk5OTlJSUk5OTlJSUlZWVlZWVlJSUlJSUlZWVk5OTlJSUk5OTlJSUlJSUlJSUlJSUlZWVlJSUlZWVk5OTlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlZWVlJSUlZWVlJSUk5OTlJSUlZWVlJSUlJSUlJSUk5OTlZWVlJSUk5OTlZWVlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUedBKdwAAAI10Uk5TAAEDBAUGCAoLDA0ODxESExUWFxkaGxwdHiAjJCYnKy0yNDY6Ozw/QEJHSEpOT1FUVVdbXF1fYWJjZGVnaWtsbW5vcnV3eX1+f4CBg4iMjY+QkpaZm56foKGio6Woqa2ur7K1uLm7vcDCxMbHyMnKy8zP09fZ29zd3+Di4+Xm5+7v8PL09fb4+fr7/P3+y42XDwAAAU9JREFUGBmVwQc3QgEYBuA3SqSQFbL3yAiZyUhlR9l7ZmaPyAjR0PefpeG63Xuc0/MgDqLG4cmFDV0m+NWeTxl6Wpdce3X4R1KzQwc+TacO1725HNkXkwJwlZSlC2Tdh/NCye4YeFRqTSqRwGyTpj3KEZWAKMPI4KKjHqNzME0jqmulAIz8q2bhTZHEqUBEB3ktWfilfBB3rKJKjoj2E+O7e0KGIOWMHLC2JOaAob5HJ5HLIAa2SYtYCp+kgoKe+4QXx2ngsGsyKOTJlQwu/QFeKOxSBQ6FW7dMUUfViNX72U+MnVLE2Lp2EiOwVgiWjDs//eWbzcVf0nViCZjBNuAhhqMWLMVWqUJ/TiHefX0K2ExnT+pEKDU92v6mVHDY8vz0uqYCP6XFSEFuGXiN1zzQjyHwEZ1qKORWAB5tm28U1gAe9o/Al9/n83o8G4jDN+fzfoLofJEQAAAAAElFTkSuQmCC);}\
.cell#ackview .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPxQTFRF////////gICAgICAmZmZgICAmZmZlZWVnZ2dj4+PkJCQlZWVkpKSlZWVl5eXlpaWkpKSk5OTk5OTkpKSk5OTkpKSlJSUk5OTlZWVkpKSlJSUlZWVlJSUlZWVk5OTlZWVk5OTlJSUlZWVlZWVlJSUk5OTlJSUlJSUlZWVlJSUlZWVlJSUlJSUlZWVlJSUlZWVk5OTlJSUlJSUlJSUk5OTlJSUlJSUk5OTlJSUk5OTlZWVk5OTlZWVk5OTlJSUlJSUlZWVlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUOEvTfgAAAFN0Uk5TAAECBAUGCgwNEBcYHB0gIiMtNDY7PT5AQURFRkxNUFRXWFleX2NpcHN3eHp8f4OEh4qMj5OWmJqfoaO5u8DIys7P0dLY2tvd4evu7/H2+fr7/f7D5KeVAAAA4ElEQVQoz83Ox1LDMBRG4T8JzXRC7y3g0EtAVF+a6SXAef93YWFDJqOILZyVdL+R5kp/XUd5vCeI0zcfwONqoaUekXdWbKEV4Pbk8AKoZpP2KIq+f4qeYK8kaQOes+EK0JvzJFwXJanwAIMex1DLTgYTHo/FcVmS1FXnM/L4p324UpC3oD4c4uIxvC+ramZm98ClmZmN5LwGr1PSAc3NZDrwBksKcgXOJWnBOedcApw655wbyrgGm41FvNW2k2T0F27O4/6dxbYwd77AbphngbvGdT5N0+7wa6++9bmS/ltfzds9oQgnbg4AAAAASUVORK5CYII=);}\
.cell#nitrate .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAX1QTFRF////////gICAqqqqgICAmZmZkpKSjo6Oi4uLlZWVnZ2dkpKSmZmZj4+Pjo6OlJSUmZmZlZWVk5OTl5eXkpKSlZWVkZGRl5eXk5OTlpaWlZWVkZGRk5OTlZWVkpKSlpaWkpKSlJSUk5OTlZWVlpaWk5OTkpKSlJSUk5OTl5eXlJSUlZWVk5OTlpaWlJSUk5OTlZWVlJSUlJSUlJSUlZWVlJSUlJSUlZWVlJSUk5OTk5OTk5OTlJSUlZWVlJSUk5OTlJSUlZWVlpaWlJSUlJSUlJSUlZWVlJSUkpKSlZWVlJSUlJSUk5OTlJSUlZWVlJSUk5OTlJSUlJSUlJSUlJSUlJSUlZWVk5OTlJSUlJSUk5OTlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUk5OTlJSUlZWVlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUcFbe1gAAAH50Uk5TAAECAwQFBwkLDA0ODxASExQYGhscHR4gISIkJSgpKi4vMjQ1ODs9PkJCQ0ZHS0xTVFZYXV5fYmVmaG1vcHFydnd4eXp+g4uMjZCRkpWWl5ianp+gpamqrbKztLq9wcXHycrN0dLT19rd3uDj5ufp7O3v8PP09fb3+Pn7/P3+S5O/ZwAAAUlJREFUGBmVwQc7m2EAhtFHJERstYKmYlZsrVEtam/SQWtvra2lMSr3b/f5jLwhcl3O0Uu87Vc8ncy69bxJ2ChUbDkDq1fAcUAxpAQvufW/S0/4fwPn2H6VN3UoSskRnH6sAf59q1bTJd0yfYd9v96x0u6RNAUEZHCObuZJFT7ZEudhx62IWodTBvcafNKD8lBAUYrCrOte/gFfZPDUvVoEr255NuFvkiISdgnBeGWaLImLWBplGMR2mC1pghs/ZCjmxkWlpE5s52kyLGNplcX15v0fLG0ydAAjujMGfQ31MqSfMefQHT/sZCnKzJZHDxZgySVbWY6k0uSqAkV4QxCU5Gxexit9uFhKlak1zGdl9u5BOCnjKzCkKG2jvmAIy9l2GJh16ZHXW9w76XLoieRpbLtDuYqp5RR++vSswlV6FIdruEVxOWS6BqtFaWrkhkARAAAAAElFTkSuQmCC);}\
.cell#docs .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeBAMAAADJHrORAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABtQTFRF////lJSUlZWVmZmZq6ur0dHR39/f6+vr////nM18ggAAAAF0Uk5TAEDm2GYAAAAySURBVBjTY2BAB4yCCCAA4ktA2B0dHY0jml9SgcJvMzRD4QcJCgUi89HDj2Z8tPhCBQAPCze0TLeE6wAAAABJRU5ErkJggg==);}\
.cell#maitai .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN5gAADeYBS1NIwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPJSURBVEiJxZZdaBxVFMd/ZyYZiwgi2QTBN8E+SKuC1CDUj6Q+FMWCLVs/qlKorpu5LkkURBAbIorUIsZ07my6KqZUhRIf1DeltG9SIbS2GAoVtTagdh20VUJwd3aOD93oms4mu/3ywHDhnP89v3Nm7p17RVVZsFKpdG21Wt0BxMaYZ7mM5qT4NgL5YrF4y8UmL5VKVzeLSWPHANbaHLAbOGiM6W8XViwWb6zVaiMi0gusBM4A0yKyx/f9Dxd053UcRdG7wFGgz1r7UDvQMAyfTpLkmOM4d4rIp8BjwKvAvKp+YK39pFgsXgcpHQMEQXCviBwEvk+S5OZCofDXctD6nAOqaqvV6gvDw8Pzi4par6p7gf3GmEdTwQDW2o+BTcCLxpgdS0EnJydXzM3NzQDfGmPWN9OFYfigqn4mIhtkfHz8Ptd1O1J016tqCYhFZBvwe7OESZKsEpGdIpIHfkzTOI5zOJ/Pl621+4HTHa7rPqWqDy/RUKeqfrREHBEBQFUnmkhmK5XK2rr2ELC5o7u7e0u5XFbgkQbhH8C8iIiqZji3CH8Dqk0SXwOsACJAgJ6G2CnHcfqMMafqxUVApiObzdampqYeL5fLNWBLXXw8iqK1IyMjcRiGW1X1fRGZ8X3/7jRqEARZEdmXJMlKx3GeAd6oh066rtuXz+dPNshvBY44ANlsthZF0ZPA3nqwN5PJvALg+/4eYFpV77LWbk4DJ0nyFaCu674EvFZ3/1Cr1e5phFpru4D7gS//s6pHR0edTCbzHrAVSETkgUqlcsjzvDtU9XNgNo7jNap63vbyPO91Vc1x7rN8JyJ9vu/PNuTu6Orq2icivdVqdVXadpIwDN9R1W1p3bVgiapu9zxvdy6Xi0qlUme92LeB1SKywff9L5rtY7HWTgC5NqEnVPWAiOQAR1V/FpEuwBORI6r6hDFmBpr8uRrgFhhoEXpcRPp93/9lYmLihjiO1wC3ichPwHRPT8/RbDZb+yf5EmAAgiDYJSLLHZEzcRyvGxwcPN1ikcuDAcIwHFPVwbSYqn6jqv2FQuHXVqEtgwGstW8Czy1yH+vs7FyXy+WidqCQfhFINWPM88DOBtfXQP+FQKGNjhcsDMMTqnoTcLsx5vCFQKGNjhdMVecBRGR+Oe0lBfPvQdHswLg8YFWtNo5XDCwiMYDruvEVBfM/vWoBPIAkSa66GHCr20nCMNykqtuB1XXfWVUdi+N4bGho6MylBqcBF9tZVR13XfetgYGBphfCVsESBMFGEXm5DlQgqY8LE2TR86eq7mq1gL8BodzNxhM+vB4AAAAASUVORK5CYII=);}\
.cell#errata .icon{background-size:30px 30px; background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARGSURBVGiB7ZpbaFxFGMf/30xOdbNeSVZ9EClenwQfagsVi4G2GAUtKRRB0MTLsntmDyQiVR8qHqkXZBGzO7sbU5CAJDHF+uClTxYq6EODl9YLWGlB0KpIIqmS2CbZ+XwwYls3yZ45c1Yp/t/O7nf7MTPfzBkOMTPOB4l/uwBX+h/EVtVqdWO1Wr3edVxq5RoplUo3SCk/A5Bm5i+FEHsBjPu+fyxu7JaBDA8PewsLCx8BuLXB35MAxj3Pm8hmsz/axG8ZiNb6BSJ6chUzA+AgM48tLi7u6+/vn2k2fktAtNZ3ENEBRFuTpwHsZ+ZRZn43CILTKxknDlKr1S43xnwO4OoYYU4S0ZvMvEcpdaiRQeJdyxizB/EgAOBSZu4BsLCcQVvMBCtKa91HRNsdhJoRQmzJ5/OfLmeQ2NQql8vXCSEOA7goZqiTzLy5UCh8vJJRIlMrDMM2IcQoHEAYY7auBgEkBNLR0fE0gA0xw3xvjOkKgmCyGWPnU0trfRsRfQBAxggz6Xnetiibo1OQcrl8iRDiCIC1McK8kU6n+3p7e09FcXLataSUFWZea+nOAJ5RSj1r4+xsRCqVyn0Axi3dfwfQq5Taa5vfCUipVLpGSnkEwGUW7j8w873NdKaVFLtrhWEopJSvww7iEynl+rgQgAOQzs7OJwBssnDd53neplwudyJuDUBMEK31OgBhVD8iGpqamtqRzWbn4uQ/U9YgxWIxTUSjALyovsy8JZPJ7BwcHLzSNv+5sl7sWuthIno0Zv4FAG8T0Vh7e/v+qHvHmbICGRoauqJer78DYL1t4gb6lYhe9n0/8lQFLKdWLpf7WSm1oV6v38jMIYDjNnHO0YmldxcrudoQSWvdBeARIuoBcEFE/0MA7lZKTVsX4PrQWKlUdgCYaNaemd9bs2ZN7A6WxDH+8Qi2r01PT29z0YadHhq11vcQUaN7q0barZTa5Sq3SxAiomY6jgFQUErVHOZ2B1KtVrcDuGUVs1NEdL/v+2+5yvuXnKyRMAzbmHn3KmYzxpitSUAAjkYkk8k8zMw3rWDyHYDuIAi+cpGvkWK332KxmE6lUscAXLWMyRdSym5Xp9zlFHtqpVKpASwPcdDzvNuThgBijki5XM4IIY4DuPgfgYkm6vX6g6tdPrtSrDUihNiFBhAAXvF9/zH8eaHQElmPSK1Wu9YY8zXOfh9hZt5ZKBSKTqqLIOsRYebncTbEPDP3FQqFsfhlRZfViGit1xHRJABa+uk3Y0xPEATvO60ugqxGhIhewt8QPxFRdxAEh92VFV2RQSqVyl0AupYej0op78zlct86rcpCkfaRMAwFgBeXHj+cn5/f+F+AACKCZDKZBwDcTEQTxpjNAwMDvyRUV2Q1vdhHRkYunJ2d/QbAmFLqKbRwj2hGTa+Rubm5h4joOd/3X02yIFs1DUJEB/L5/NEki4mjln6LkqTOm8+c/gCo9pdutARe+gAAAABJRU5ErkJggg==);}\
</style>');
/*
        $('#ESO-slide-button').click(function(event){
$('#all-tools-dropdown').toggle();$('#tools-link').toggleClass('active');$('.menubox').hide();$('.dropdown').removeClass('active');event.stopPropagation();
$('#ESO-slide-button').toggleClass('active');
$(".clickmenu ul").hide();
$(".clickmenu .topitem").removeClass("active");
});

$('#open-pppp').click(function(){
            $('#ESO-slider').slideToggle('fast');
			if ($('#open-pppp').hasClass("active")){
			$('iframe#tocframe').animate({"margin-top":"30px"},'fast');
			$('.docnav-div').animate({"margin-top":"0px"},'fast');
			$('#open-pppp').toggleClass("active");
			$("iframe#tocframe").height($(window).height()-30);
			}else{
			$('iframe#tocframe').animate({"margin-top":"75px"},'fast');
			$('.docnav-div').animate({"margin-top":"45px"},'fast');
			$('#open-pppp').toggleClass("active");
			$("iframe#tocframe").height($(window).height()-75);
			}
			});
$('#tools-link-a').click(function(event){

});
$('html').click(function() {
$(".clickmenu ul").hide();
$(".clickmenu .topitem").removeClass("active");
$("#all-tools-dropdown").hide();
$("#tools-link").removeClass("active");
}); */

});