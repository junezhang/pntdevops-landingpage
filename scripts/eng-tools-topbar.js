$(document).ready(function() {
    $('.toparea-wrap').prepend('<div id="ESO-slider">\
  <a href="http://engineering.redhat.com/">\
    <span id="ESO-title">ENGINEERING TOOLS </span>\
  </a>\
  <span id="ESO-linkss">\
    <span style="display:inline-block">\
      <a href="https://orgchart-stage.eng.bne.redhat.com/">\
        <span id="people-link"> People </span>\
      </a>\
      <a href="https://engineering.redhat.com/pp/">\
        <span id="product-link"> Product </span>\
      </a>\
      <a href="https://engineering.redhat.com/docs/en-US/Engineering_Services_And_Operations/1/html/Performance/index.html">\
        <span id="performance-link"> Performance </span>\
      </a>\
      <a href="#" id="tools-link-a">\
        <span id="tools-link"> All Tools </span>\
      </a>\
    </span>\
  </span>\
</div>\
\
<div id="all-tools-dropdown">\
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


$('head').append('<style>#ESO-slider { display: none; width: 100%; left: 0; top: 0; background-color: #DDDDDD; box-shadow: 0 -30px 30px -20px #AAAAAA inset; color: #555555; height: 45px; ; z-index: 999; } #ESO-slider #ESO-title { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEKgAABCoB0H9wEwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASrSURBVEiJrZZvSFtXFMB/L892/qlNNNti01hpoR127QqyfugmIkOKTWupbSeIJuqKyP6UwbBD6Cxzfqnb2Erph/phQu1s6doVZzcGYy2FTq1uTEbpFlKZzLEIc/7DmJWa5OzDS7rn8yWasQMH7jv33PO799x377mKiLCSVFZWbldV9e3x8fGymZkZ29TUVHowGLTY7fZwTk7O3w6H4w+n03l5bGzszMDAwPyKAQFEJKF6PJ6KoqKiCUBWo+np6VG3291fX1+/MVlcETEHV1RU2EpLS+8pirIqoFFtNlukpqamMxlYMaba6/XuGBoaGvT7/evitj1Adaw9D4QAFXACvwHZwAjwORDVxXK73cMLCwsv3r59O5w01XV1dc86HI5F/eytILdAfjDo9yDXQcpjfmdBjpqsvqSkZDRpqo8cObKusLBwzjjwAMhFkPdjwGHDBD4FuRFr3wRZbwI/fPjwVwnBZWVlP5rt1zsgH4MoIGtBLCCvmGQgro0mMRRFkcbGxteX7bHX633p0qVLNyORyLKt6AGeAb4FMoHngbXLvP6V34FKE/u2bdsW/H7/ehGJAlgAHjx40BWHpgMbgK3AJuCn2MAy4IUVoAD5wA4Tu9/vz6qqqvow/m3Zu3fvpuHh4QIAD3ALuAFcBmqBD4B2wIeWt9XIngR2n89X9xicnZ3dHI1qh8DL0hUVox2ZL2KTKAfeA+6y9NgYJQNt5YrBfv/+/VyPx+MCsAQCgf3xjgGD49PAeaAEbU+mgD7gDeDNJOAF4BPgCrAvNhYgEomgqupxAMv09PRT8QFngF8MQTYAH6Gtug6wxeyDwHcJwPVALrAFbZuadX3BYHB7HJwRN84ATcCwSbANwHHgG+Az4F1g+XWkSYbhe7+uHQwGnQBp8/Pzqt4phJbKQ8CrQI4hiCW2ki0JoGaiL1ehUMgKYHG5XI+MjlHgOtBgs9EDLHNIUa7o2rm5uZMAloKCglkz5wsXLjA+PY3a3Mw+tH3+NUXgI6AbuKiz5eXljQGk5eXljQMO46A1a9agKAqnT5+msLCQ/v5+qrq6eA4oRbtgtgJPmgDn0TJ2GfjL0Ge320cAqK6u7gDEarWK2+2WtrY22bVrl7hcLpmYmBC9nDhxQlRVXXIP54AUgWwHcYJkJqnTiqJIeXl5voigtLa22o4dOxbIz8/PsFi0E7e4uEhTUxOZmZmcO3duyYxHR0fp7u7GarXidDoJhULMzc2xefNmfD4f4XCYU6dOmaa+uLh44s6dO07gcXU6L/+TdHR0JFzxyZMn3zKWRaeIhFKFNDQ0SG1trfT09Dy2eb1eU+jOnTvnxKwei0hbquBIJCIjIyPy8OFDEREJBAKSlZUlaWlp0tLSIteuXZPBwUHp6+sLt7e3V6Fd3x7gZT1YFZGvU4Xr5eDBg2K326W3t9fY9ZpobzsFOApUGt9CVhG591+gnZ2dsnv3bpmcnDR2nTUwEj5v14vIl6lAw+GwXL16VWZnZ/XmqIi0mEETgRERi4i0ishCKhPQyZiIHEgETQaO60YR6ZLV//EBEWkWkSdWiLv8QZ9AMtEeIOVAAVqVtAJ/AhPAz2gl+y6rfCH9A8z4PVCKv4EqAAAAAElFTkSuQmCC); background-position: left 8px; background-repeat: no-repeat; display: inline-block; font-family: "OverpassBold"; font-size: 18px; font-weight: bold; height: 45px; left: 10px; line-height: 45px; padding-left: 40px; position: relative; } .toparea-wrap { position: relative; top: 0; left: 0; width: 100%; z-index: 999; } #ESO-slider #ESO-linkss { margin-right: 10px; position: absolute; right: 0; } #ESO-slider a { color: #666666; padding: 0; } #people-link, #product-link, #performance-link, #tools-link { background-position: left 12px; background-repeat: no-repeat; color: black; display: inline-block; font-family: OverpassBold; height: 45px; line-height: 40px; margin-left: 10px; opacity: 0.7; padding-left: 20px; text-shadow: 1px 1px 1px #FFFFFF; font-size: 13px } #people-link { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH2wsRAw0ciLHb/AAAAIJJREFUOMu9k0EKwzAMBHcC/mEhZ32qT0oOftT2okNIldRgUsFeLHmwlxW2NVOLJqsEAA0IoKcCaCXB9pckhSSfFOXsBaAXgF7NPuOBpPfg2eUXWvrQUyGp/fQgX/SStBXQLXvLHWAtzDtrvQPsA4D9eIdjlIGhXNvm2Sj/FcDsOn8A+SLNI5vUyFAAAAAASUVORK5CYII=) } #product-link { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH2wsRAw0l17RT9AAAAHBJREFUOMvt080KwkAMBOAvUp+mr9+rT1bZ8bKCFimt69GBgRCSScgPzFjQkINsPWfWjXzJpbpa4Zrk7gCqasKKVFeSpJxAVQUuBvEX+JFAXnbrxB145g5dotFfqCRjQ0jyRtz2Wt7Gf9pC26u3dTwAfqhsfvGb74MAAAAASUVORK5CYII=) } #performance-link { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH2wsRAww7NKBf1gAAANdJREFUOMul07FKA0EQBuDvQrSwDr6CRQqx8gXEVNosyz6Fb5Le3u44rgkWqUVJI/gMtnkABcWLzVrkCLLH/TDF8M//z87uDszxiA67wuiyZg6rAcJ+rCr8YILjmMK3AjR1e4QvdFV2ElOoDEBTtzuYFhSe4gkXMYXPPj8paHaNM1wdIksMFnjD7WCDpm6r3PkONzkfdIJzbGMKL9jisl8wPXSzGfd4xzrnD9g0dbv3YnsGf0RTtyd4xQwpc0ssi0aIKXxk4QbP/804+ieO3gVjt7GKKRiDXwB0cf5TVS/KAAAAAElFTkSuQmCC) } #all-tools-dropdown { position: absolute; right: 5px; background-color: #fff; box-shadow: 0 0 0 1px #aaa, 0 0 4px 0px #555; width: 500px; padding: 10px; display: none; z-index: 999; } #all-tools-dropdown:after { border-color: transparent transparent #FFFFFF; border-style: inset; border-width: 14px; content: ""; height: 0; left: 477px; position: absolute; right: 0; top: -28px; width: 0; } #tools-link.active { opacity: 1; color: #222; text-shadow: 0 0 6px #8DD6FF; } .cell { padding: 5px; float: left; width: 80px; text-align: center; margin: 5px; } .cell:hover { background-color: #F6F6F6; box-shadow: 0 0 0 1px #A2DDFF, 0 0 2px #DDDDDD; } #all-tools-dropdown a, #all-tools-dropdown a:visited, #all-tools-dropdown a:hover { color: #555; } .cell .icon { height: 50px; width: 50px; margin-left: auto; margin-right: auto; opacity: 0.7; background-position: center center; background-repeat: no-repeat; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAKJQTFRF////gICAgICAkpKSlZWVkpKSkJCQmZmZlJSUl5eXlpaWlpaWl5eXlJSUlZWVlJSUk5OTlZWVk5OTlZWVlZWVlJSUlJSUlZWVlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUSKT8eAAAADV0Uk5TAAIEBwwOFxkfICInLDc8RVBSU1RbX2Rsd3l6hIWNmZ6jrLW3xcbS09Xa29/h7PP3+Pn6/P4YTHyPAAAA10lEQVQYGe3BR3LCABAEwAGRcxLJ5CCyiPP/r/ngKpfBswtnim58fNxLNcaL3fEQzfslvCQ/OfHXNkzgmWB45p2oAl9myUeXNjyFPYUv2NJrSm2YZtQuFRiatEQJSMkNTSGkFm1bSFM6ShCCmI4+hDI9cwh1eiIIHXoOELr0HCGE9OwgVOlZQMjRM4ayoqMBZUDbKQWleKVpAm1EyzkPLRvTMISldqO0DGDqUdln4Ojd+M+6AFct5oNZGk9kR1f+sWniBcXBij/iaSuJF+WqYbdTLwf4eGffKCeWAyVzUhcAAAAASUVORK5CYII=); background-size: 80%; } .cell#performance .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPNQTFRF////////qqqqv7+/29vbzMzM0dHRzMzM0tLSycnJzMzM0dHRzMzMj4+P0tLS0NDQ0NDQlJSUmZmZ0NDQ0dHRpaWl0NDQ0NDQqampz8/Pz8/Prq6u0NDQ0dHRtra2z8/Pz8/Pz8/Pubm50NDQ0dHRz8/P0NDQvr6+wMDA0NDQwcHBw8PD0NDQ0NDQxcXF0NDQ0dHRlJSUz8/PlJSU0dHRycnJ0NDQ0NDQy8vL0NDQ0NDQy8vL0NDQlJSUzc3N0NDQ0NDQ0dHR0NDQzs7Ozs7O0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQlJSU0NDQlJSU0NDQcQ6fpwAAAE90Uk5TAAIDBAcKCw8RExkcHiIoKzxDRkZOUlZXWVtgYWxvdHV2e3yDhIaJjY2UlZycnqissLGxsrW3t73JyszP09TW2t/h5OXo6O309ff5+vz9/qGi6aEAAADhSURBVCjPhZPncsIwEIQBU0LHQOi9hRbA9F5Ch8Te938aNENzsE/sH2n0jWZPdyuD4Y0kiYsVRfc4mRY42HVAnYNbOHtvWNQqBzREN3XbssTKQpdWBIJ05Z4T2s+HaZwnOEbYQnhHgQzdFtsWU4HGFcg+dVPVtvHaXEbvun/1NpUWYNrZ9UcSZux3kHASExtjFbNrBnr3TQFldR0v3n1szWQcTCEgS6XFUfgB9h96mNl8rlnRm6//rX94W0dAM2Akoih0gTyd1DrwTQdZrMpDv07gHt4BK+cbkOowPPvjYq4un4xBGIP2PyoAAAAASUVORK5CYII=);}\ .cell#people .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAEJQTFRF////////gICAk5OTlZWVlZWVkpKSlJSUlZWVlZWVk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUAmJeAAAAABV0Uk5TAAEGGh0wMUNSZY6YnaKrs7/X2Ob+119wIgAAAH5JREFUKM/d0EkOwyAMQNHMCZkggX//q2aTmFa4crvtX1l6MgKq6utq52P0rta1DQAQWnX3VgjavkNyCvvMXuGYOf7OxuHG1YyHGd9ifGo3PNPQFTidLM+8cE5v2GzA3t/twNa88EzRnHVMJadReEVpFT40PoSTxkkYtf/nz12ZziGJm0cjvAAAAABJRU5ErkJggg==)}\ .cell#product .icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJZQTFRF////gICAmZmZkpKSmZmZkJCQlZWVl5eXlZWVlJSUl5eXlZWVkZGRk5OTkpKSlJSUlpaWlpaWk5OTkpKSk5OTlZWVlZWVk5OTlZWVlJSUlZWVlJSUlJSUlZWVlZWVlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUNQRgkQAAADF0Uk5TAAIFDg8XGBsdHyAkJSgqKy4zND1XWWdvcXJzfH5/kJ2usbnR4OLk6ers7e7x8/v8/uEgL2gAAACQSURBVCjP7dI3EsJAEETRjxcgvPcyGAFyff/LEUCRaCggIuGnr7Z6goX3VVtGlQeOwlxGeTgCGKZ6UToEAh0n5eJgebxXAMRa2hdNFQNSz+aGBEgdm+t//hn3bW5KQKS1zQtFgKfz3KkVcmYneUA7efXXkjaA618tvPguXzTY3Ft1LS09Jw7m611212z78eANk8spzeN8d3cAAAAASUVORK5CYII=)}\ .cell#beaker .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAeNQTFRF////////gICAqqqqgICAmZmZgICAn5+fjo6Oi4uLlZWVnZ2dkpKSmZmZlpaWkpKSl5eXkJCQlZWVmZmZk5OTlZWVlJSUl5eXk5OTlpaWkpKSlZWVkZGRlJSUk5OTlZWVkpKSlJSUkpKSlJSUlZWVkpKSlJSUlpaWk5OTkpKSlZWVlZWVlJSUlpaWlJSUlZWVlpaWlJSUk5OTlZWVk5OTlZWVk5OTk5OTlJSUk5OTlZWVlJSUk5OTlJSUk5OTlJSUlZWVlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUz8/PlJSUlJSUlZWVlJSUlJSUlJSUk5OTlJSUlJSUlJSUlZWVlJSUlJSUlJSUs7OzlJSUl5eXlJSUsrKylJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUrq6ulJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUmJiYlJSUlZWVmJiYmpqam5ubn5+foaGhoqKipaWlp6enr6+vsLCwsbGxurq6vLy8v7+/wMDAxsbGyMjIycnJysrKzc3Nzs7OF/jRGwAAAIp0Uk5TAAECAwQFBggJCwwNDg8RFRYXGBkaHR8gISIjJCUmKCkqKzEyNTY3OEJERkhKS0xNTlFTVFdZWlxfYWdudHV2d3h5e3yDhYaKjY+Sk5aeoKSlp6qsrbCxsrW3uru9v8PIyMvMztDR0tPV2Nna3N3e3t/f4ODh4urr7O3v8PHx8/T2+Pn6+vv8/f7+x0aq6QAAAdtJREFUSMft1FdTE1Ech+GfiiEiGFBjiQWwgVGwY1cENGBvCJZYsIEmGiMIStRYYtbX3rvuR/UOMdlszjpeeOF7s/OfOc/M7pxzVvqL1e2o8wZ8PUCPzwtpIlIdockLiQ6VqGQo6oW0Z0MKZdu9kJCVOpKyQp6+P9x5rzNsvNq/LrqzVhovBYOG5BSDWZZIjQlINJqIBUTGTbvVrQbizc1xGgzIdmqkgxl/Il4mlcUTBmQ+Hb7Zw11VtEhSC1UG5iQpy1pcSasktVJpcr5WH43MkmLJCqkiGfOyM1Z/W1u/FfZAVN8LvfUe70wgYL62IudZvK5HmyVJGzPHDMUUuCRJOg8zzMh0SEqS+mDuf/IvkQFJ0mVjshxSkqSbsMZIlF+Bc5KkMzAwyYQcgDszJUnBYThsINbz63VWABuKijl3Yc/ItBvSNcX+FWehb8LIWHoRLpS6kw64P2/UXJuGXa5iqQXXT4/uKrDMRUy+Aa/t33sDg1MLijHH4dm3HPL9OZwYW4hsAT7ZuX1+AtsKiIUP4J2d33vILHIUE2Pw8ocDsV9BvNyJ7IPHX5yE/fUp7HcQK4EPtnMfgVX5ZC9cu/22QC+gO58cwr2HAaej4lo6/+b41251a1O1/rifY4sidejxLV0AAAAASUVORK5CYII=); } .cell#bugzilla .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAAnNCSVQICFXsRgQAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAEyUlEQVRYw92Xa2xURRTHW8pLtAg+4oMohhSMYDAxEY1Rg4bEB0pCQvwglsQPJXwSYyLGJpolbRojoYWd/+x2haWlEhqXFlrEplAKQSgtbVFRQayFCLQVo1Sl0dLn8dyZ2bt7d/e227RrjHeS3TvP3z3PmUmjtNSXtP8gBAUo+Dcg51MO8S4D+eekGFIyHTfkmpQbHkfEzpRDZEg0jvAJEG+MAyKz5Cpki/cxhI3eaYnHbJ0PSuQYSSwfuAdvo4WnR8oNnBAb5C1xH5LDfYHRIOnyobiJq/GnAxApvyE3mOlQ1i6QeG0UiFiHHt/iSD2YiTIXgCryC/lYZLRnKjoSO7hTMVNwBJe23KVroQyuuSNaxPNq6UnI9j/AEr+AH7i1PQnvKrxNtonGkulKUfmugO+w0qh3Fc6xRG2o0mDvkqRcGAvQjVqslRswnBDwo1ztmaRGviS/tFt/xjWs1e1JeZd4jn0psbGvyBzPZDVmKRpi7FM55mD0PREH+EWs1/GBx2Vdwk94eYwQlDqmdyN3081W+84lqNZtlXSROqnWIad3pvZJ+WwoY1SIZzL+tqf2yPyiWVbrgeVHrxwzrTvoL7KeYaqPVlm+vE9uwh/83oE837wRISo9WKVXFHrvVJLNLa1oJauUq54aCj+d0bJcxwD/DqFd1YZR73/YFSJf4SH9KNaBxWkF6AMdVpATJHmBkA257rRLn/TLLP6oR3nO7xgU97pCOFeVaWFxOz4Kq66EtCyf8nsxdRhIqxNyLHrvEUtHUJf2Iu9M4WEF0Hb6hs6yFUCHFKRByeKnM3SBvlbvVm27SZ2JMrRb5p2Bdzm81MTLRi3FFDSy7Ilz3ws0aFrlk0lC5BqOYHuBbqOY3fxeqyCN5IuBnOf+z/X7O+6QdIdNgtELfKsQfWwT0DZqUZi9MRC/+gRVAiofZ4sVOjfYkMCtuCwKschY5GlnypB0ir6n/aZWoyBNvKxL8qxCrugy+ezDrfNtCFaaZNiE3Jg9MK58TM0KU+XSL/rU/3HRaFqqbXXJLBQYPuEi3pJd7pjPFOQUO4Ku72VLRdnokgzphI9FrJ1fAYfhQxkchGV41co72KinBNhndsVAAkaW/VGx/1NEEseByTPVN9vVhf1zMKhdk2iIDsZgqhWkmXHgSNHPjnBv3hhOK6iwYlw/PUYtZzlSoOK9SWEO2JL0hoORxOtjgBQ/gn7JIWY9A2p6O781m6X2GVm2KcxpqgjLMRi4I1lIOofjVW3kAU7nh9UCe1h55XZcNCpMTdz5JclNq2iWiZNa65DgFg+VCtJiq8lAcpKEcNQQB+cK3lfuR2fs4p9Qm0ogPjqpMI698VwkykeByC08/E2z1y+OPVKcYcv0G/XpdGn7FfmWJ73H4ysebp8j5VMcUA73HaSrJt00KMihcF9R0gcJ32zePq9FJ0zMxeloTLHZQ8Dbl5al1EKG3E5dCSDiRZ6wz3lpEDVq544/C9NxBakfxma364SLunzzvAuj5HiPLwokuuR6sTseVM6Ik/11+eO6aXmnoZcTzGZ9RZB3i3XiIB8Q7AMfSuryWqeM8zqHZxIFWDDTuxALCm+aoDsjPkic8ib0YoqjIO+ylEKURfoDM1Isie9Bc91JJWRiyv8H8g/dUJoUUwlb1wAAAABJRU5ErkJggg==); } .cell#brew .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYNQTFRF////////gICAqqqqgICAmZmZkpKSn5+fmZmZi4uLlZWVkpKSmZmZj4+Pjo6OnJyclJSUmZmZkpKSm5ublZWVk5OTlZWVkZGRk5OTkpKSkZGRlpaWk5OTlZWVl5eXjo6Ok5OTlpaWkpKSlZWVkZGRlZWVlJSUlZWVlZWVlJSUlpaWkZGRlZWVk5OTlJSUk5OTlZWVlJSUlJSUk5OTlJSUlZWVk5OTk5OTkpKSlJSUlJSUk5OTkpKSlZWVlJSUlJSUlZWVlJSUk5OTlJSUk5OTlZWVlJSUlJSUlJSUlZWVk5OTlJSUlZWVlJSUlJSUk5OTlZWVk5OTk5OTlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUk5OTlZWVlZWVlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUlZWVlJSUlJSUlJSUlZWVlJSUk5OTlJSUlJSUk5OTlJSUlJSUlZWVlJSUJlmpzQAAAIB0Uk5TAAECAwQFBwgKCwwODxASEhMUFRcYGh0eISMlJygpLC0tLi8wMzU5Ojw+P0FBQkNHSExPUFFSVVpeX2JjZWpweX2BhIaHiYqNj5CTlpyeoKGjpqirrK6vsbW3uLq7v8HDzs7U1dna29ze4eLj5efq7e7w8fLz9fb3+vv7/P39/v5JQZ+kAAABe0lEQVRIx+3URVcDQRCF0YeF4MEdkuBuwd3dHSo4BAsuIYHh/XRWsGCmmTOcwwb49nfRXd0F/NbiauqTgbDcZmcEgMS62gQTENkXILWJkl2SR+XRoy9kcKC0ozJGTcZIknwiSQY3+N6FRyWcGhVptQrSTWVHhiBneF9NOBinF/UP/LLT9M8iyk+T5j+TIjPBS91tmZIL3RTPzMis7viV9yT9KyS57Cd5M0OSW4ckgyR5kKK/si7y3AHP5KQHjt65/kxUj0+1h9t7ZocKnsleu8FcmshdxYxDpOHz/D6JdccCQLzLDgBJTpspiVqSFRsQsyoLEUDSmkybklwRcQLFIpIFVIhIChAit71er3dnr9CA5IuIGygRkWygSkRSgdDHcO6sk0cLpMzlcjWSVxZIAoC8f/JHybHP5zshr60/y4B1smhA0kQkA8gW2XQAbpF1u+nfbx1pA4DOkRYAYd3DDT+yYSySgN84KkjnVztcsxkR2y1fFGmvy/jvvTeNppVLx6jtlwAAAABJRU5ErkJggg==); } .cell#trac .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAgpQTFRF////////gICAqqqqgICAmZmZgICAkpKSn5+fjo6OmZmZlZWVnZ2dkpKSmZmZj4+PlpaWjo6OmZmZkpKSl5eXkJCQlZWVl5eXkpKSlZWVkZGRk5OTlpaWkpKSlZWVkZGRlJSUlpaWk5OTlZWVkpKSlJSUk5OTlpaWkpKSlJSUlpaWlZWVkpKSlJSUk5OTlZWVkpKSlpaWk5OTk5OTkpKSlZWVk5OTk5OTlJSUlpaWlZWVk5OTlZWVk5OTlJSUk5OTlJSUlZWVk5OTlZWVk5OTlZWVlJSUlJSUk5OTlJSUlZWVlJSUk5OTlJSUlJSUlZWVk5OTk5OTlJSUlZWVlJSUlZWVlJSUlZWVlJSUlJSUk5OTlJSUlJSUk5OTk5OTlJSUlZWVlJSUlZWVlJSUk5OTlZWVlJSUlZWVlJSUlJSUk5OTlJSUlZWVlJSUlJSUlJSUlJSUlZWVlZWVk5OTlJSUlJSUlJSUk5OTlJSUk5OTlJSUlZWVlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUu5HwuAAAAK10Uk5TAAECAwQFBgcICQoMDQ4PEBESFBUWFxgbHB0eISIjJCUmJygpKistLjEyMzU2OTs8PT9AQkRGR0lKS01QUlVWV1hZWltcXl9iY2RlZmhpa2xtb3BxcnN1eHl6e3x+gIKIiYqLjI6QlJeYmZqbnJ2en6Coqq2usbK0t7m6u7y+wMHDxMXGx8jJysvMzc/Q0tPV1tja29zf4OHi4+Tm6Ovs7e7v8vP09vf4+fv8/f7TIHcVAAACN0lEQVQYGdXB+1uLYQAG4GdrWk0nlbSKMpUcJgpZckihkFNyyjEkOUcHISUSqSwhyUK1Nu35H73vN9mXa9e77SeX+8Y/YEKErMM/H8QiIn0kuxYhAhmUNiIsq87XpgMZlC4gHKmfSE85LJReACd/DOVBrZrCzFp8pNCP3SSHLVA6TOlzjINCA55ROAAlGzV2XCfHEvCKQjPU2igdAQrKkoHnFJqglviOQin8HlI4hhDirn7x3jbAzzZLuuKgFBUDwABN9GKg0tlng1LVrPflNkiWpg9znva98QghxkOhHkD2EDWuKgOUlvoo+IpgeMN5PTlQ6qZ0HxUMcK2HygY3hS70UWfCDBXHOMk6wzT1KqFkrji+HZnU861BaHbqjJ/GHwktb+sRlI1+o5eK8zMNCGgn2YhgUqhpjsZCVh+FXARh/Epy9hACUspLzMBKSicQzME5jhQgIPY1OWZHIqVOwNHbkoq/WIss0NlPYcKKSQqDKJ4jHxuhVEtpwFRN4QY6KJRDqYia1YYn5OQy9FNohFo/pX2I2nMmD+ilcBNqWS4Ku+D3iMJZhLCig+yJhV+hj3SnIaT4bCPmnfN82wylTQPv7+VAU9M2Mnp5HcxGKEVPk3TvBJDUSs1gIdSWU3LnA538zXdnCZSclJqwlQHODKhUUOpFN3WcRqjUeUk2YIp6pVDKunLrlDGdC2xBaHbqeO8iDLn0m2mt2VGShHCkUfM0GWEzTVG4ZkIELpLfyxAZx1Er/gu/AJkoY+Y50Ty8AAAAAElFTkSuQmCC); } .cell#wrangler .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAR1QTFRF////////gICAqqqqgICAv7+/mZmZgICAqqqqkpKSgICAjo6OmZmZi4uLlZWVnZ2dmZmZlpaWlJSUjIyMmZmZkpKSl5eXkJCQlZWVj4+Pl5eXkpKSlJSUkpKSlpaWlJSUlZWVlpaWk5OTlJSUk5OTlJSUlZWVk5OTlJSUk5OTlJSUlJSUlZWVlJSUlJSUlJSUlJSUlZWVlJSUlZWVk5OTlJSUlZWVlJSUlJSUk5OTlJSUk5OTlJSUlJSUk5OTlJSUlJSUlJSUlZWVlJSUk5OTlJSUlJSUlJSUlZWVlJSUlJSUk5OTlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUJI504QAAAF50Uk5TAAECAwQEBQYGBwgJCgsMDQ8RExQUFRYXGBkgKis2ODlBS05RU1ZZXF9hYmtxdXd5fH1+f4CBhIiMjp+hoqeos8nMztHT1tfY2t3g4eLj4+fo6evt7/Dx8/T2+Pv+/k4y4z0AAAFlSURBVEjHzdJnW4MwEMDxaKNWLXUC7r33nm3dW+u2deX7fwwlFMiFSwiv9P/ynv4eKHeE/HUj893pwOghY7etKcDYEfMaMP193fgxB++rpmDihIPqjmsG6idPOahs24Zg6oyDt61OM5CZvuDgZaPDDNCZSw6eV9oNwdwVB0/Lbf7A6oPFHtxY5uBx0QoWU2Gw7wOJ9HvT+4VcONhncl95SIYY+1wSZ8PnH6Bf0xMjZdemiv9pu66CKIwnHJTcOLjxhNuCkussanxBcEIwk/GFiiAmEEoSM6FQE8lEQkOAEYSOCEYUWhIaIPSkZqBIIL6BIolwA0UiITlPWCQF4Xfl2g3mhAsHGj3xbzcLjZbUrp1AoyM0/LrN4r1pCBX2IRo1oWCDglESKu08MioiC8EoSFxEBieYCA1OUBEYlNzhwjddKKmWSoU9tEKxVIyTQZacA0nTQ6J4lV84P7u2rmtzt5f8834Atkm0BrNrXc8AAAAASUVORK5CYII=); } .cell#vdb .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAltQTFRF////gICAqqqqgICAkpKSmZmZnZ2dlpaWmZmZl5eXkJCQmZmZlJSUkpKSlJSUlZWVlJSUl5eXk5OTlpaWlZWVlJSUlpaWlZWVk5OTkpKSlpaWlJSUk5OTlJSUlJSUk5OTlJSU1tbWlZWVlZWVlJSUlZWVlZWVk5OTlJSUlJSUk5OTlJSUk5OT1tbWlZWVlJSUlJSUlJSUzs7OlJSUlJSUlJSUlJSUx8fHlJSUlpaWm5ubl5eXpaWllJSUsrKy3t7elJSUt7e3lJSUlJSUwMDAlJSUlJSUl5eXlJSUmpqalJSUqqqqra2t09PTtra2uLi41tbW4uLilJSUlJSUwcHB39/f0dHRlJSUlJSU1dXVlJSU5ubmlJSUysrKlJSUlJSUlJSUlJSUlJSUlJSU3d3dlJSUlJSUlZWVlpaWl5eXmJiYmZmZmpqam5ubnJycnZ2dnp6en5+foKCgoaGhoqKio6OjpKSkpaWlpqamp6enqKioqampqqqqq6urrKysra2trq6ur6+vsLCwsbGxsrKytLS0tbW1tra2uLi4ubm5urq6u7u7vLy8vb29vr6+v7+/wMDAwcHBwsLCw8PDxMTExcXFxsbGx8fHyMjIycnJy8vLzMzMzc3Nz8/P0NDQ0dHR0tLS09PT1NTU1dXV1tbW2NjY2dnZ2tra3d3d3t7e39/f4ODg4uLi4+Pj5OTk5eXl5ubm5+fn6Ojo6enp6urq6+vr7Ozs7e3t7u7u7+/v8PDw8fHx8/Pz9PT09fX19vb29/f3+Pj4+fn5+vr6+/v7/Pz8/f39/v7+////7583HwAAAGZ0Uk5TAAIDBgcKDREUFhcZHyMmKSssLS48Pj9BQkRLUVNWWFpdXmBnaWpsb3l6gIGChIuSlJ6hoquws7W4ubu8wMPHyMnKy8zP0NHR19fY2Nrc3d7e3uTn5+fo6erq8/P09PX3+fr8/f3+quanoQAAAnZJREFUSMdjYBhKgJGDX1RGRVNNVlyQk4mwcnY546CkNARIDjdR4sKjnlfDFlk5DKQ6aQli18CinZCGCyTrs2HRIeaVhg8ESWPoMEpNIwDM0XQophDSkTZPF1WL/Q6CWlYHomoJPdFAQEfZ0WhULSEndhXh1ZG76UQsqhbrTScOdePR0bL3xE5PVC0WhatPnFiRj0ND1sITJzaWuqJpSUvr3H/i8PLOHEz1bYuBMhPT0jC1pOUtOnTixLE1k+pLsqCqM4tr+1YeOXHiyHKQR7FoSUvLaJiz9QQIHN65fsW6HQfB7F3zWzLBsli1gEBh17S5y9Zs23ds//Z1y+dP7y2Fy+DUghugabEkXYsjEVp8ULUEVBPUkRuGqsVub18Gfh3Vm/zRvN99eFdXOh4NK49OxgixgoXHts9oyMSmvrRn5fFlxdgCuWzZoRNH189uKS+AuzGnuG7Kin0njqyqxhUv6TVTVx0Cxfih3ZvXbtp54DiQeWQtzG6cUZle0dQxYca8pauWL5g5sbO5OpOKsU+GFisitLijanEhQosfqhbfToI6KiNRtdjsWVKMV0PmpN3eaN6v2nJsEe5iKXPC3h0NWIqL3UfXzGjMwpJeuhft2T8hA1sgZ05ae+TE0Y1zJnQ0VgLTTHpeWV1rz/SV+08c2zgjG2e8ZNbPWHP4BKTEgFBHN8xqzsIaL2bIBVdRZWN735T+jqbq4mwkcWdULTpExIshqha+OII6kkXR6iSFRAI6UjUwaj4hB7w6PESwtRDUY3BqSNBixl6NcyubRmFRH2+hzoOntcAsoeccjGgvJEe4GUixEtWIERCXU5WXFOZiGqh2FADJlYmNoTtMqgAAAABJRU5ErkJggg==); } .cell#cloud .icon { background-image: url(images/cloud.png); } .cell#rt .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQtQTFRF////////qqqqgICAmZmZkpKSn5+fjo6Oi4uLnZ2dkpKSlpaWjo6Ol5eXr6+vjo6OlZWVlJSUlJSUlJSUlpaWlZWVmJiYlJSUlZWVlJSUlJSUlpaWlZWVkpKSk5OTlZWVlJSUlZWVk5OTk5OTlZWVlZWVk5OTk5OTsrKylJSUlJSUlZWVsrKylZWVlJSUs7OzlJSUk5OTk5OTlJSUlJSUk5OTlJSUlJSUlJSUlJSUk5OTlJSUs7OzlJSUlJSUlJSUlJSUlJSUlJSUlJSUs7Ozs7Ozk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUs7OzpeHcDAAAAFd0Uk5TAAEDBAUHCAkLDQ4REhYgISQlKSssMDEyNDc5OTo9QEFFSElOUlRXXGBmbnF0eHyAg4eOkpihoquxs7m8wMHDycvQ0uDg5Obr7/Dx8vP19vf4+fr7/P3+bMwHzgAAAQNJREFUSMdjYBgF5AENfcJAA1WLTQRhYDNQWnQ0cAMd7Fr48AQPH621qPGSqkUrzJGbNC264eHh9pykaDEIBwFbduK1GIVDgBaxWhhNoDqMGYnUwmQK1WFIrPdZzKE69IgNZDZLqA5tQlEpqgoR4LCGaAjVJBT7kh7ByiA+lx1ER4g6oQQj5xMeHqDAwMDjANERqEIojSn6gdT5yvI6QXT4KxFMlmYQld7OENpHnnBKZrYIRwKeUsQkflYrhA53ceLyC7stTIebMLFZjNMLoiNAgPhcKegP0hEkQ0pGFgkExocYaXlfIthPiNTiQpqf/oXSwGtxdcENXAeyfiFRyyigIQAAq4zoJ5E+vHIAAAAASUVORK5CYII=); } .cell#piwik .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAk9QTFRF////////gICAqqqqgICAmZmZgICAkpKSn5+fjo6OmZmZi4uLlZWVnZ2dkpKSmZmZj4+PlpaWjo6OlJSUmZmZkpKSl5eXkJCQlZWVk5OTl5eXkpKSlZWVkZGRl5eXk5OTlpaWkpKSlZWVlJSUlpaWk5OTlZWVkpKSlpaWkpKSkpKSlJSUlpaWk5OTlZWVkpKSlJSUlpaWlJSUlZWVk5OTlZWVkpKSlJSUlpaWk5OTlZWVk5OTlJSUlJSUk5OTlZWVk5OTlJSUlpaWlJSUlZWVk5OTlJSUlZWVk5OTlZWVk5OTlJSUk5OTlJSUlZWVlJSUlZWVlJSUlZWVk5OTlJSUlZWVlJSUlZWVk5OTlJSUlJSUk5OTlJSUlZWVlJSUlZWVk5OTlJSUk5OTlJSUlJSUlJSUk5OTk5OTlJSUk5OTlJSUlZWVlJSUk5OTlJSUlZWVlZWVlJSUlJSUk5OTlJSUk5OTlJSUk5OTlJSUlJSUlJSUlJSUlJSUk5OTlJSUlZWVlJSUk5OTlJSUlZWVlZWVlJSUk5OTlJSUlZWVk5OTlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUylSzHAAAAMR0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBobHB0eICEiIyQmJygpKi4vMTIzNDU2Nzg5Ojs8PT4/QEFCQ0VHSElKS0xNUFFSU1RVVldYW11eX2BjZGVmZ2hpa29wcXJzdHV2d3l6e4CBgoOEhoeIiYuMjY6Sk5SVlpiZm6ChoqOkpqeoqqutrq+0tba3uLq8vb6/wMHDxMrLzM3Oz9LU1tjZ2tvd3t/g4eLj5OXm5+jp6uvs7e7v8PL09fb3+Pn6+/z9/szGi7YAAAJcSURBVBgZ1cH5I5MBAAbgdzbVnKtoiEi3OybVOqRTdCjRbRKdS1KkkqKiS0Kp6HB0iEgkYTbb+4e1lRybb9/3q+fBDCOPPHj1QUVZfpI3JEr9SrJ3wESan2ghSXJz3noVAP+U4n6+CocELhjnmd0zclIGCWShu3XH0nxhpX7McjlERXykjelpmheAXN6SQYxv9eFtUUHq9BrzUAqAMyyAZP43LToANyzxEKU5kKXf7wUgj9dc4Nb2YQ5ELCINXSZD5TIgzZQPaKmDg5WYYp0S8Ml826cB8oYDgGdtLrBnuhMCBx41w0nw7C0BdjER9ow0FvvB3uy6LjfkGEOgaDkOewaSgxdVsBNmOQ3379cBGRwMvjzUTf48pcQYbU4grO73q7BYgekMtMPzLsnOTAVs4kyshVWwRgYBPaOu2Eqb1j0yAFlkA5wrZyiW8J+mREDH4Y1wLpkn4GrimPq1X7rdIcJ96DXQygl6iKrkUjziBHNZMETsZSn0nMxYpIZTnh1MWMGpfl/whjNayzvXF7TTl62EE5dZso8OOjIUEDSrief76KglVQYhy4f4jdNp3AwhO4cpoC4WAuJ+cHrmQjkEhNRzOs0aCJNl/KI9c4ESgo4UumOu7hMn6ymNgRO1/LwFkG+60mShjeXNuRgXOLNg9NIQK8JgNctD5eO3cD7EZDbiIcmOkiQlJKrWBY7yrwZIM28k4CzHREOSo88VnRxzG5K8T9/O/wy+kGCDQd3IcbmQoKqqiBPa5RAVNHqPk+2AKD1HOFkNRIUnrInXxMXGro6JjoqMCA9bhZnlD5rDqHNUYM3BAAAAAElFTkSuQmCC); } .cell#ackview .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAUpQTFRF////////qqqqmZmZmZmZi4uLnZ2dkpKSlpaWkJCQl5eXkpKSk5OTkZGRlJSUlpaWk5OTlZWVl5eXlJSUlpaWlJSUlpaWlJSUk5OTkpKSk5OTlJSUlZWVk5OTlJSUlJSUlZWVlZWVk5OTlJSUlZWVk5OTk5OTlJSUlJSUlZWVlZWVlJSUlZWVlZWVlJSUlJSUlZWVlJSUk5OTk5OTlJSUlZWVlJSUlJSUlJSUlJSUlJSUk5OTlZWVk5OTlZWVlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlZWVlJSUk5OTlJSUlJSUk5OTlZWVlJSUlJSUlJSUk5OTlJSUlJSUlJSUk5OTlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUx4y2wAAAAG10Uk5TAAEDBQoLDQ4RFxscISUmJygpLDIzNzg5Oz1AQ0ZHSkxNUlNYWVpcXV9gZWZnbG5wc3d7gIOEhYaIioyOkJOXmJudnp+goaSlqaqxtLe4ubu/wcbHyMrS09Xg4ebp7e7w8fP09fb3+Pn6+/z9/ke4ohgAAAFASURBVEjH7dJHV8JAAEXhsfeGioqiYO+xK8UesAYbKihWFBG4/3/rwlDiiSazc8Hdvcz5NpMRoty/rmU2cBAOTrfaBu4r9M46bYFKP8VSk3bIFqVlPdZiAoDEiS9w+gGQqLESVXGAnVohhGiLAswbzkOapmldhk8egH19ND4BEcN5HMBt+BQEXhryaw+4tyLnwEVhLQCfViQG7BbWMvBgRZwul6u5sC6BaytiaBRgUYYMpYG7egky/A6ku4V9spQDcjPfY3VD7xngML+Mr3YFIOnVVwrTDI92AODNKeyTihjAmJAgPQCbQoasA5mm4p5T9B4BtvOro4SEgRuze/z9kiPAsRzxKooyKEd+7Q9S56iWJGsZklNSZBwg2ydDjvjxK61JCACfyYlfVVXVYXLQD5Bsl7rLkdvXaK+UKFfOTl9YWqw1FagQIgAAAABJRU5ErkJggg==); } .cell#nitrate .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAkxQTFRF////lJSU////gICAlJSUqqqqgICAlJSUmZmZgICAkpKSlJSUn5+fjo6OmZmZi4uLlJSUlZWVnZ2dkpKSlJSUmZmZj4+PlJSUlpaWjo6OlJSUkpKSkJCQlZWVmZmZkpKSlJSUlZWVlJSUk5OTlJSUlpaWlZWVlJSUlJSUlpaWk5OTlZWVkpKSlJSUl5eXk5OTkpKSlJSUlZWVkpKSlJSUlZWVk5OTlJSUkpKSlJSUlpaWlJSUlJSUlZWVk5OTlJSUlJSUlJSUlZWVlZWVk5OTlJSUlpaWk5OTlJSUk5OTlZWVk5OTlJSUlJSUk5OTlZWVlZWVlJSUlJSUlJSUlZWVk5OTlJSUk5OTlJSUlJSUk5OTlJSUlJSUlZWVk5OTk5OTlZWVlJSUlJSUlJSUk5OTlJSUkpKSlJSUlJSUlZWVk5OTlJSUk5OTlJSUlJSUk5OTlZWVlJSUlJSUk5OTlJSUlZWVlJSUlJSUk5OTlJSUlJSUlJSUlJSUk5OTlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlZWVlJSUlJSUk5OTlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUk5OTlJSUlJSUlZWVlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUqw1W1gAAAMN0Uk5TAAEBAgMDBAQFBgcHCAkKCwsMDQ4PDxAQERITFRcYGRwcHR4hIiIkJSYnKCkqKywtMTI1Njk6Ozs9Pj9AQUFCQ0RFRkhJSktOUVNUVVVWV1lbXV5gYGFhY2RmaGlqbG1vcXJzdXZ3eHl7f4CBgoOFh4mMjY6PkJGSlZWWmJmanZ+goqOkpaeoqaytrq+wtLa4uby9vsHCxMXGysvM0NHS1dbZ2tve4eLj5OXm5+jo6err7O3u7/Dx8/T19vf4+fr7/P3+OyjlwwAAAnJJREFUGBmVwYdDzGEABuBXKY4zKlKSlUJJctkjMiIzRMMoldWVbBI6yioqJCGUkFWiKNXlev8x3+9WN76r+z0P5JITodbZf9lQqZI0aKHKO5IvZ0EFfyOFtpXw1iTdCZoZM+EVnaGPdjc0GNHuBjqpD8fwpj+kq1YdhpP0he761iEmCx5kDtKioZs2nVfjsegbT0Jql4mKv+diQ2kx+HSvFohtI1kAiaR+KhoWAsuo+FQYCWFGOxV5cFdKxRl/AGmk8f5mP1gcM1HoXwx3R4xkPhTFb3PCMGR7L4UGP7hLaC2GWTic7aEiD27mIBgelFPoCYSL9Fp4NPUDhUNwljhgmgmPMijUwUlMJ5kNjwK7SQ5GwkFYC8lXkNswG7hFIRdDtC+oWACpR+yqf0yhFHY+FTQrgNROWv28krFiCsz0tHgPqfGddFADIZU2Okhd55COeQBW9dPmEqQSaGdcAyCqg3Zf/SDVRJsMAKFNdLARUqdodRlCVI7hjZE2ZZCaO0izmtGw0hyn1W8tpJ5Q0TQNdkG9JE0HT1e2pEBqH4Vf8+HgHoVcAL6QmvyHHEiEo2QKP8LgURl5GE7GdlCogEdreQ0usqjYBkcB62ER4YdRN8fAhc9zCr1bYBdxvssAs7j2BxpIxPRTMO6AxepKE1kERVw7WT0REvlUXIQwLu01FZkA/HN7KNQFQaKI5F0fYKa+nRZb4ZvUSLPqCZApZK0GS+8YabP/wmdaVGkglxEY8owyFf7wbPlHumlLxbBCqujMVBKMkRzt45BmfTS8sKSZZt/L9fHwUsBtKgqgxoFukulQJbqR3AR1tCWMhVopgZD6D9yf9Bq/iSlVAAAAAElFTkSuQmCC); } .cell#maitai .icon { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN5gAADeYBS1NIwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPJSURBVEiJxZZdaBxVFMd/ZyYZiwgi2QTBN8E+SKuC1CDUj6Q+FMWCLVs/qlKorpu5LkkURBAbIorUIsZ07my6KqZUhRIf1DeltG9SIbS2GAoVtTagdh20VUJwd3aOD93oms4mu/3ywHDhnP89v3Nm7p17RVVZsFKpdG21Wt0BxMaYZ7mM5qT4NgL5YrF4y8UmL5VKVzeLSWPHANbaHLAbOGiM6W8XViwWb6zVaiMi0gusBM4A0yKyx/f9Dxd053UcRdG7wFGgz1r7UDvQMAyfTpLkmOM4d4rIp8BjwKvAvKp+YK39pFgsXgcpHQMEQXCviBwEvk+S5OZCofDXctD6nAOqaqvV6gvDw8Pzi4par6p7gf3GmEdTwQDW2o+BTcCLxpgdS0EnJydXzM3NzQDfGmPWN9OFYfigqn4mIhtkfHz8Ptd1O1J016tqCYhFZBvwe7OESZKsEpGdIpIHfkzTOI5zOJ/Pl621+4HTHa7rPqWqDy/RUKeqfrREHBEBQFUnmkhmK5XK2rr2ELC5o7u7e0u5XFbgkQbhH8C8iIiqZji3CH8Dqk0SXwOsACJAgJ6G2CnHcfqMMafqxUVApiObzdampqYeL5fLNWBLXXw8iqK1IyMjcRiGW1X1fRGZ8X3/7jRqEARZEdmXJMlKx3GeAd6oh066rtuXz+dPNshvBY44ANlsthZF0ZPA3nqwN5PJvALg+/4eYFpV77LWbk4DJ0nyFaCu674EvFZ3/1Cr1e5phFpru4D7gS//s6pHR0edTCbzHrAVSETkgUqlcsjzvDtU9XNgNo7jNap63vbyPO91Vc1x7rN8JyJ9vu/PNuTu6Orq2icivdVqdVXadpIwDN9R1W1p3bVgiapu9zxvdy6Xi0qlUme92LeB1SKywff9L5rtY7HWTgC5NqEnVPWAiOQAR1V/FpEuwBORI6r6hDFmBpr8uRrgFhhoEXpcRPp93/9lYmLihjiO1wC3ichPwHRPT8/RbDZb+yf5EmAAgiDYJSLLHZEzcRyvGxwcPN1ikcuDAcIwHFPVwbSYqn6jqv2FQuHXVqEtgwGstW8Czy1yH+vs7FyXy+WidqCQfhFINWPM88DOBtfXQP+FQKGNjhcsDMMTqnoTcLsx5vCFQKGNjhdMVecBRGR+Oe0lBfPvQdHswLg8YFWtNo5XDCwiMYDruvEVBfM/vWoBPIAkSa66GHCr20nCMNykqtuB1XXfWVUdi+N4bGho6MylBqcBF9tZVR13XfetgYGBphfCVsESBMFGEXm5DlQgqY8LE2TR86eq7mq1gL8BodzNxhM+vB4AAAAASUVORK5CYII=); } .cell#errata .icon { background-size: 30px 30px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARGSURBVGiB7ZpbaFxFGMf/30xOdbNeSVZ9EClenwQfagsVi4G2GAUtKRRB0MTLsntmDyQiVR8qHqkXZBGzO7sbU5CAJDHF+uClTxYq6EODl9YLWGlB0KpIIqmS2CbZ+XwwYls3yZ45c1Yp/t/O7nf7MTPfzBkOMTPOB4l/uwBX+h/EVtVqdWO1Wr3edVxq5RoplUo3SCk/A5Bm5i+FEHsBjPu+fyxu7JaBDA8PewsLCx8BuLXB35MAxj3Pm8hmsz/axG8ZiNb6BSJ6chUzA+AgM48tLi7u6+/vn2k2fktAtNZ3ENEBRFuTpwHsZ+ZRZn43CILTKxknDlKr1S43xnwO4OoYYU4S0ZvMvEcpdaiRQeJdyxizB/EgAOBSZu4BsLCcQVvMBCtKa91HRNsdhJoRQmzJ5/OfLmeQ2NQql8vXCSEOA7goZqiTzLy5UCh8vJJRIlMrDMM2IcQoHEAYY7auBgEkBNLR0fE0gA0xw3xvjOkKgmCyGWPnU0trfRsRfQBAxggz6Xnetiibo1OQcrl8iRDiCIC1McK8kU6n+3p7e09FcXLataSUFWZea+nOAJ5RSj1r4+xsRCqVyn0Axi3dfwfQq5Taa5vfCUipVLpGSnkEwGUW7j8w873NdKaVFLtrhWEopJSvww7iEynl+rgQgAOQzs7OJwBssnDd53neplwudyJuDUBMEK31OgBhVD8iGpqamtqRzWbn4uQ/U9YgxWIxTUSjALyovsy8JZPJ7BwcHLzSNv+5sl7sWuthIno0Zv4FAG8T0Vh7e/v+qHvHmbICGRoauqJer78DYL1t4gb6lYhe9n0/8lQFLKdWLpf7WSm1oV6v38jMIYDjNnHO0YmldxcrudoQSWvdBeARIuoBcEFE/0MA7lZKTVsX4PrQWKlUdgCYaNaemd9bs2ZN7A6WxDH+8Qi2r01PT29z0YadHhq11vcQUaN7q0barZTa5Sq3SxAiomY6jgFQUErVHOZ2B1KtVrcDuGUVs1NEdL/v+2+5yvuXnKyRMAzbmHn3KmYzxpitSUAAjkYkk8k8zMw3rWDyHYDuIAi+cpGvkWK332KxmE6lUscAXLWMyRdSym5Xp9zlFHtqpVKpASwPcdDzvNuThgBijki5XM4IIY4DuPgfgYkm6vX6g6tdPrtSrDUihNiFBhAAXvF9/zH8eaHQElmPSK1Wu9YY8zXOfh9hZt5ZKBSKTqqLIOsRYebncTbEPDP3FQqFsfhlRZfViGit1xHRJABa+uk3Y0xPEATvO60ugqxGhIhewt8QPxFRdxAEh92VFV2RQSqVyl0AupYej0op78zlct86rcpCkfaRMAwFgBeXHj+cn5/f+F+AACKCZDKZBwDcTEQTxpjNAwMDvyRUV2Q1vdhHRkYunJ2d/QbAmFLqKbRwj2hGTa+Rubm5h4joOd/3X02yIFs1DUJEB/L5/NEki4mjln6LkqTOm8+c/gCo9pdutARe+gAAAABJRU5ErkJggg==); }\</style>');

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
$('#all-tools-dropdown').toggle();$('#tools-link').toggleClass('active');$('.menubox').hide();$('.dropdown').removeClass('active');event.stopPropagation();
});
$('html').click(function() {
$("#all-tools-dropdown").hide();
$("#tools-link").removeClass("active");
});

});