
    

  

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>test/test.js at master from jquery's qunit - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://assets0.github.com/stylesheets/bundle_common.css?91a07a3bcdffed6312a4290ed0eb7fb893c5b803" media="screen" rel="stylesheet" type="text/css" />
<link href="https://assets0.github.com/stylesheets/bundle_github.css?91a07a3bcdffed6312a4290ed0eb7fb893c5b803" media="screen" rel="stylesheet" type="text/css" />

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {}
      var github_user = null
      
    </script>
    <script src="https://assets2.github.com/javascripts/jquery/jquery-1.4.2.min.js?91a07a3bcdffed6312a4290ed0eb7fb893c5b803" type="text/javascript"></script>
    <script src="https://assets2.github.com/javascripts/bundle_common.js?91a07a3bcdffed6312a4290ed0eb7fb893c5b803" type="text/javascript"></script>
<script src="https://assets3.github.com/javascripts/bundle_github.js?91a07a3bcdffed6312a4290ed0eb7fb893c5b803" type="text/javascript"></script>


        <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "jquery/qunit"
      })
    </script>

    
  
    
  

  <link href="https://github.com/jquery/qunit/commits/master.atom" rel="alternate" title="Recent Commits to qunit:master" type="application/atom+xml" />

        <meta name="description" content="An easy-to-use JavaScript Unit Testing framework." />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "jquery/qunit";
      GitHub.currentRef = 'master';
      GitHub.commitSHA = "c532d183664118fc2ca13a0b1b478f4c31e3e865";
      GitHub.currentPath = 'test/test.js';
      GitHub.masterBranch = "master";

      
    </script>
  

            <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

          <script type="text/javascript">
      var mpq = [];
      mpq.push(["init", "65fde2abd433eae3b32b38b7ebd2f37e"]);
      (function() {
      var mp = document.createElement("script"); mp.type = "text/javascript"; mp.async = true;
      mp.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + "//api.mixpanel.com/site_media/js/api/mixpanel.js";
      var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(mp, s);
      })();
      </script>

  </head>

  

  <body class="logged_out page-blob">
    

    

    

    
      <div id="site_alert">
        <form action="/translate?to=%2Fjquery%2Fqunit%2Fblob%2Fmaster%2Ftest%2Ftest.js" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="d9399b914679fdb5b7a2c71b319bc66d5828eb03" /></div>        <p>
          Would you rather see this site in French? (Préféreriez-vous voir ce site en Français?) &nbsp;
          <button class="minibutton" name="code" value="fr"><span>Yes (Oui)</span></button> &nbsp;
          <button class="minibutton" name="code" value="en"><span>No (Non)</span></button>
        </p>
        </form>      </div>
    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
        
          <a class="logo boring" href="https://github.com">
            <img src="/images/modules/header/logov3.png?changed" class="default" alt="github" />
            <![if !IE]>
            <img src="/images/modules/header/logov3-hover.png" class="hover" alt="github" />
            <![endif]>
          </a>
        
        
        <div class="topsearch">
  
    <ul class="nav logged_out">
      <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
      <li class="explore"><a href="/explore">Explore GitHub</a></li>
      <li class="features"><a href="/features">Features</a></li>
      <li class="blog"><a href="/blog">Blog</a></li>
      <li class="login"><a href="/login?return_to=https://github.com/jquery/qunit/blob/master/test/test.js">Login</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public   ">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/jquery">jquery</a> / <strong><a href="https://github.com/jquery/qunit">qunit</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="https://github.com/jquery/qunit/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/jquery/qunit/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'd9399b914679fdb5b7a2c71b319bc66d5828eb03'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/jquery/qunit/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'd9399b914679fdb5b7a2c71b319bc66d5828eb03'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/jquery/qunit/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', 'd9399b914679fdb5b7a2c71b319bc66d5828eb03'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/jquery/qunit/watchers" title="Watchers" class="tooltipped downwards">691</a></li>
          <li class="forks"><a href="/jquery/qunit/network" title="Forks" class="tooltipped downwards">80</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="https://github.com/jquery/qunit" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="https://github.com/jquery/qunit/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/jquery/qunit/network" highlight="repo_network">Network</a></li>
    <li><a href="/jquery/qunit/pulls" highlight="repo_pulls">Pull Requests (5)</a></li>

    

    
      
      <li><a href="/jquery/qunit/issues" highlight="issues">Issues (15)</a></li>
    

            
    <li><a href="/jquery/qunit/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="#" class="dropdown">Switch Branches (2)</a>
      <ul>
        
          
          
            <li><a href="/jquery/qunit/blob/cli/test/test.js" action="show">cli</a></li>
          
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Switch Tags (0)</a>
      
    </li>
    <li>
    
    <a href="/jquery/qunit/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <a href="/jquery/qunit/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>An easy-to-use JavaScript Unit Testing framework.
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/jquery/qunit/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="d9399b914679fdb5b7a2c71b319bc66d5828eb03" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="An easy-to-use JavaScript Unit Testing framework.">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://docs.jquery.com/QUnit" rel="nofollow">http://docs.jquery.com/QUnit</a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/jquery/qunit/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="d9399b914679fdb5b7a2c71b319bc66d5828eb03" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="http://docs.jquery.com/QUnit">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
            <div id="url_box" class="url-box">
        <ul class="clone-urls">
          
            
            <li id="http_clone_url"><a href="https://github.com/jquery/qunit.git" data-permissions="Read-Only">HTTP</a></li>
            <li id="public_clone_url"><a href="git://github.com/jquery/qunit.git" data-permissions="Read-Only">Git Read-Only</a></li>
          
          
        </ul>
        <input type="text" spellcheck="false" id="url_field" class="url-field" />
              <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://assets2.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://assets2.github.com/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

        <p id="url_description">This URL has <strong>Read+Write</strong> access</p>
      </div>
    </div>


        

      </div><!-- /.pagehead -->

      





<script type="text/javascript">
  GitHub.downloadRepo = '/jquery/qunit/archives/master'
  GitHub.revType = "master"

  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  

  
</script>






<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/jquery/qunit/commit/c532d183664118fc2ca13a0b1b478f4c31e3e865">Added URL flag ?notrycatch (ala ?noglobals) for debugging exceptions.</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/a9d4d2558b560b0ef168ced0f6c5198c?s=140&d=https%3A%2F%2Fgithub.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/jzaefferer">jzaefferer</a> <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2011-01-12 12:29:48">Wed Jan 12 12:29:48 -0800 2011</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/jquery/qunit/commit/c532d183664118fc2ca13a0b1b478f4c31e3e865" hotkey="c">c532d183664118fc2ca1</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/jquery/qunit/tree/c532d183664118fc2ca13a0b1b478f4c31e3e865" hotkey="t">9098faab3aea1a09c414</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/jquery/qunit/tree/074e2911202ce33c235b7bcea024f701319ff2b3" hotkey="p">074e2911202ce33c235b</a>
      

    </div>
  </div>

    </div>
  </div>



  <div id="slider">

  

    <div class="breadcrumb" data-path="test/test.js/">
      <b><a href="/jquery/qunit/tree/c532d183664118fc2ca13a0b1b478f4c31e3e865">qunit</a></b> / <a href="/jquery/qunit/tree/c532d183664118fc2ca13a0b1b478f4c31e3e865/test">test</a> / test.js       <span style="display:none" id="clippy_2758">test/test.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://assets3.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_2758&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://assets3.github.com/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_2758&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="test/test.js/">
        
          <ul class="big-actions">
            
            <li><a class="file-edit-link minibutton" href="/jquery/qunit/file-edit/__current_ref__/test/test.js"><span>Edit this file</span></a></li>
          </ul>
        

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://assets0.github.com/images/icons/txt.png?4e0a5cbe04af64c11548a6f6e600fc2593fdcaef" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                
                  <span>315 lines (271 sloc)</span>
                
                <span>6.389 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/jquery/qunit/raw/master/test/test.js" id="raw-url">raw</a></li>
                
                  <li><a href="/jquery/qunit/blame/master/test/test.js">blame</a></li>
                
                <li><a href="/jquery/qunit/commits/master/test/test.js">history</a></li>
              </ul>
            </div>
            
  <div class="data type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;module without setup/teardown (default)&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC3'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC4'><span class="p">});</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;expect in test&quot;</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC7'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC8'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC9'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC10'><span class="p">});</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;expect in test&quot;</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC13'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC14'><span class="p">});</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;setup test&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC17'>	<span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC18'>		<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC19'>	<span class="p">}</span></div><div class='line' id='LC20'><span class="p">});</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;module with setup&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC23'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC24'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC25'><span class="p">});</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;module with setup, expect in test call&quot;</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC28'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC29'><span class="p">});</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><span class="kd">var</span> <span class="nx">state</span><span class="p">;</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;setup/teardown test&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC34'>	<span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC35'>		<span class="nx">state</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC36'>		<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC37'>	<span class="p">},</span></div><div class='line' id='LC38'>	<span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC39'>		<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC40'>	<span class="p">}</span></div><div class='line' id='LC41'><span class="p">});</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;module with setup/teardown&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC44'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span></div><div class='line' id='LC45'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC46'><span class="p">});</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;setup/teardown test 2&quot;</span><span class="p">);</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;module without setup/teardown&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC51'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC52'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC53'><span class="p">});</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">setTimeout</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'><span class="nx">state</span> <span class="o">=</span> <span class="s1">&#39;fail&#39;</span><span class="p">;</span></div><div class='line' id='LC57'><br/></div><div class='line' id='LC58'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;teardown and stop&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC59'>	<span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC60'>		<span class="nx">equal</span><span class="p">(</span><span class="nx">state</span><span class="p">,</span> <span class="s2">&quot;done&quot;</span><span class="p">,</span> <span class="s2">&quot;Test teardown.&quot;</span><span class="p">);</span></div><div class='line' id='LC61'>	<span class="p">}</span></div><div class='line' id='LC62'><span class="p">});</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;teardown must be called after test ended&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC65'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC66'>	<span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC67'>	<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC68'>		<span class="nx">state</span> <span class="o">=</span> <span class="s2">&quot;done&quot;</span><span class="p">;</span></div><div class='line' id='LC69'>		<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC70'>	<span class="p">},</span> <span class="mi">13</span><span class="p">);</span></div><div class='line' id='LC71'><span class="p">});</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;async setup test&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC74'>	<span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC75'>		<span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC76'>		<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC77'>			<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC78'>			<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC79'>		<span class="p">},</span> <span class="mi">500</span><span class="p">);</span></div><div class='line' id='LC80'>	<span class="p">}</span></div><div class='line' id='LC81'><span class="p">});</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'><span class="nx">asyncTest</span><span class="p">(</span><span class="s2">&quot;module with async setup&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC84'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC85'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC86'>	<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC87'><span class="p">});</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;async teardown test&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC90'>	<span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC91'>		<span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC92'>		<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC93'>			<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC94'>			<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC95'>		<span class="p">},</span> <span class="mi">500</span><span class="p">);</span></div><div class='line' id='LC96'>	<span class="p">}</span></div><div class='line' id='LC97'><span class="p">});</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'><span class="nx">asyncTest</span><span class="p">(</span><span class="s2">&quot;module with async teardown&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC100'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC101'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC102'>	<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC103'><span class="p">});</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;asyncTest&quot;</span><span class="p">);</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'><span class="nx">asyncTest</span><span class="p">(</span><span class="s2">&quot;asyncTest&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC108'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC109'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC110'>	<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC111'>		<span class="nx">state</span> <span class="o">=</span> <span class="s2">&quot;done&quot;</span><span class="p">;</span></div><div class='line' id='LC112'>		<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC113'>		<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC114'>	<span class="p">},</span> <span class="mi">13</span><span class="p">);</span></div><div class='line' id='LC115'><span class="p">});</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'><span class="nx">asyncTest</span><span class="p">(</span><span class="s2">&quot;asyncTest&quot;</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC118'>	<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC119'>	<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC120'>		<span class="nx">state</span> <span class="o">=</span> <span class="s2">&quot;done&quot;</span><span class="p">;</span></div><div class='line' id='LC121'>		<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC122'>		<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC123'>	<span class="p">},</span> <span class="mi">13</span><span class="p">);</span></div><div class='line' id='LC124'><span class="p">});</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;sync&quot;</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC127'>	<span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC128'>	<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC129'>		<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC130'>		<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC131'>	<span class="p">},</span> <span class="mi">13</span><span class="p">);</span></div><div class='line' id='LC132'>	<span class="nx">stop</span><span class="p">();</span></div><div class='line' id='LC133'>	<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC134'>		<span class="nx">ok</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC135'>		<span class="nx">start</span><span class="p">();</span></div><div class='line' id='LC136'>	<span class="p">},</span> <span class="mi">125</span><span class="p">);</span></div><div class='line' id='LC137'><span class="p">});</span></div><div class='line' id='LC138'><span class="p">}</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;save scope&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC141'>	<span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC142'>		<span class="k">this</span><span class="p">.</span><span class="nx">foo</span> <span class="o">=</span> <span class="s2">&quot;bar&quot;</span><span class="p">;</span></div><div class='line' id='LC143'>	<span class="p">},</span></div><div class='line' id='LC144'>	<span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC145'>		<span class="nx">deepEqual</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">foo</span><span class="p">,</span> <span class="s2">&quot;bar&quot;</span><span class="p">);</span></div><div class='line' id='LC146'>	<span class="p">}</span></div><div class='line' id='LC147'><span class="p">});</span></div><div class='line' id='LC148'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;scope check&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC149'>	<span class="nx">expect</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC150'>	<span class="nx">deepEqual</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">foo</span><span class="p">,</span> <span class="s2">&quot;bar&quot;</span><span class="p">);</span></div><div class='line' id='LC151'><span class="p">});</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;simple testEnvironment setup&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC154'>	<span class="nx">foo</span><span class="o">:</span> <span class="s2">&quot;bar&quot;</span><span class="p">,</span></div><div class='line' id='LC155'>	<span class="nx">bugid</span><span class="o">:</span> <span class="s2">&quot;#5311&quot;</span> <span class="c1">// example of meta-data</span></div><div class='line' id='LC156'><span class="p">});</span></div><div class='line' id='LC157'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;scope check&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC158'>	<span class="nx">deepEqual</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">foo</span><span class="p">,</span> <span class="s2">&quot;bar&quot;</span><span class="p">);</span></div><div class='line' id='LC159'><span class="p">});</span></div><div class='line' id='LC160'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;modify testEnvironment&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC161'>	<span class="k">this</span><span class="p">.</span><span class="nx">foo</span><span class="o">=</span><span class="s2">&quot;hamster&quot;</span><span class="p">;</span></div><div class='line' id='LC162'><span class="p">});</span></div><div class='line' id='LC163'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;testEnvironment reset for next test&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC164'>	<span class="nx">deepEqual</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">foo</span><span class="p">,</span> <span class="s2">&quot;bar&quot;</span><span class="p">);</span></div><div class='line' id='LC165'><span class="p">});</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;testEnvironment with object&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC168'>	<span class="nx">options</span><span class="o">:</span><span class="p">{</span></div><div class='line' id='LC169'>		<span class="nx">recipe</span><span class="o">:</span><span class="s2">&quot;soup&quot;</span><span class="p">,</span></div><div class='line' id='LC170'>		<span class="nx">ingredients</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;hamster&quot;</span><span class="p">,</span><span class="s2">&quot;onions&quot;</span><span class="p">]</span></div><div class='line' id='LC171'>	<span class="p">}</span></div><div class='line' id='LC172'><span class="p">});</span></div><div class='line' id='LC173'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;scope check&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC174'>	<span class="nx">deepEqual</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">recipe</span><span class="o">:</span><span class="s2">&quot;soup&quot;</span><span class="p">,</span><span class="nx">ingredients</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;hamster&quot;</span><span class="p">,</span><span class="s2">&quot;onions&quot;</span><span class="p">]})</span> <span class="p">;</span></div><div class='line' id='LC175'><span class="p">});</span></div><div class='line' id='LC176'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;modify testEnvironment&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC177'>	<span class="c1">// since we do a shallow copy, the testEnvironment can be modified</span></div><div class='line' id='LC178'>	<span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">.</span><span class="nx">ingredients</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s2">&quot;carrots&quot;</span><span class="p">);</span></div><div class='line' id='LC179'><span class="p">});</span></div><div class='line' id='LC180'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;testEnvironment reset for next test&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC181'>	<span class="nx">deepEqual</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">recipe</span><span class="o">:</span><span class="s2">&quot;soup&quot;</span><span class="p">,</span><span class="nx">ingredients</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;hamster&quot;</span><span class="p">,</span><span class="s2">&quot;onions&quot;</span><span class="p">,</span><span class="s2">&quot;carrots&quot;</span><span class="p">]},</span> <span class="s2">&quot;Is this a bug or a feature? Could do a deep copy&quot;</span><span class="p">)</span> <span class="p">;</span></div><div class='line' id='LC182'><span class="p">});</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;testEnvironment tests&quot;</span><span class="p">);</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'><span class="kd">function</span> <span class="nx">makeurl</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC188'>	<span class="kd">var</span> <span class="nx">testEnv</span> <span class="o">=</span> <span class="nx">QUnit</span><span class="p">.</span><span class="nx">current_testEnvironment</span><span class="p">;</span></div><div class='line' id='LC189'>	<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">testEnv</span><span class="p">.</span><span class="nx">url</span> <span class="o">||</span> <span class="s1">&#39;http://example.com/search&#39;</span><span class="p">;</span></div><div class='line' id='LC190'>	<span class="kd">var</span> <span class="nx">q</span>   <span class="o">=</span> <span class="nx">testEnv</span><span class="p">.</span><span class="nx">q</span>   <span class="o">||</span> <span class="s1">&#39;a search test&#39;</span><span class="p">;</span></div><div class='line' id='LC191'>	<span class="k">return</span> <span class="nx">url</span> <span class="o">+</span> <span class="s1">&#39;?q=&#39;</span><span class="o">+</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">q</span><span class="p">);</span></div><div class='line' id='LC192'><span class="p">}</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;makeurl working&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC195'>	<span class="nx">equal</span><span class="p">(</span> <span class="nx">QUnit</span><span class="p">.</span><span class="nx">current_testEnvironment</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="s1">&#39;The current testEnvironment is global&#39;</span><span class="p">);</span></div><div class='line' id='LC196'>	<span class="nx">equal</span><span class="p">(</span> <span class="nx">makeurl</span><span class="p">(),</span> <span class="s1">&#39;http://example.com/search?q=a%20search%20test&#39;</span><span class="p">,</span> <span class="s1">&#39;makeurl returns a default url if nothing specified in the testEnvironment&#39;</span><span class="p">);</span></div><div class='line' id='LC197'><span class="p">});</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;testEnvironment with makeurl settings&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC200'>	<span class="nx">url</span><span class="o">:</span> <span class="s1">&#39;http://google.com/&#39;</span><span class="p">,</span></div><div class='line' id='LC201'>	<span class="nx">q</span><span class="o">:</span> <span class="s1">&#39;another_search_test&#39;</span></div><div class='line' id='LC202'><span class="p">});</span></div><div class='line' id='LC203'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;makeurl working with settings from testEnvironment&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC204'>	<span class="nx">equal</span><span class="p">(</span> <span class="nx">makeurl</span><span class="p">(),</span> <span class="s1">&#39;http://google.com/?q=another_search_test&#39;</span><span class="p">,</span> <span class="s1">&#39;rather than passing arguments, we use test metadata to form the url&#39;</span><span class="p">);</span></div><div class='line' id='LC205'><span class="p">});</span></div><div class='line' id='LC206'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;each test can extend the module testEnvironment&quot;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC207'>	<span class="nx">q</span><span class="o">:</span><span class="s1">&#39;hamstersoup&#39;</span></div><div class='line' id='LC208'><span class="p">},</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC209'>	<span class="nx">equal</span><span class="p">(</span> <span class="nx">makeurl</span><span class="p">(),</span> <span class="s1">&#39;http://google.com/?q=hamstersoup&#39;</span><span class="p">,</span> <span class="s1">&#39;url from module, q from test&#39;</span><span class="p">);</span>	</div><div class='line' id='LC210'><span class="p">});</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;jsDump&quot;</span><span class="p">);</span></div><div class='line' id='LC213'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;jsDump output&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC214'>	<span class="nx">equals</span><span class="p">(</span> <span class="nx">QUnit</span><span class="p">.</span><span class="nx">jsDump</span><span class="p">.</span><span class="nx">parse</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]),</span> <span class="s2">&quot;[\n  1,\n  2\n]&quot;</span> <span class="p">);</span></div><div class='line' id='LC215'>	<span class="nx">equals</span><span class="p">(</span> <span class="nx">QUnit</span><span class="p">.</span><span class="nx">jsDump</span><span class="p">.</span><span class="nx">parse</span><span class="p">({</span><span class="nx">top</span><span class="o">:</span> <span class="mi">5</span><span class="p">,</span> <span class="nx">left</span><span class="o">:</span> <span class="mi">0</span><span class="p">}),</span> <span class="s2">&quot;{\n  \&quot;top\&quot;: 5,\n  \&quot;left\&quot;: 0\n}&quot;</span> <span class="p">);</span></div><div class='line' id='LC216'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">document</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;qunit-header&quot;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC217'>		<span class="nx">equals</span><span class="p">(</span> <span class="nx">QUnit</span><span class="p">.</span><span class="nx">jsDump</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;qunit-header&quot;</span><span class="p">)),</span> <span class="s2">&quot;&lt;h1 id=\&quot;qunit-header\&quot;&gt;&lt;/h1&gt;&quot;</span> <span class="p">);</span></div><div class='line' id='LC218'>		<span class="nx">equals</span><span class="p">(</span> <span class="nx">QUnit</span><span class="p">.</span><span class="nx">jsDump</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;h1&quot;</span><span class="p">)),</span> <span class="s2">&quot;[\n  &lt;h1 id=\&quot;qunit-header\&quot;&gt;&lt;/h1&gt;\n]&quot;</span> <span class="p">);</span></div><div class='line' id='LC219'>	<span class="p">}</span></div><div class='line' id='LC220'><span class="p">});</span></div><div class='line' id='LC221'><br/></div><div class='line' id='LC222'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;assertions&quot;</span><span class="p">);</span></div><div class='line' id='LC223'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;raises&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC224'>	<span class="kd">function</span> <span class="nx">CustomError</span><span class="p">(</span> <span class="nx">message</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC225'>		<span class="k">this</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="nx">message</span><span class="p">;</span></div><div class='line' id='LC226'>	<span class="p">}</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>	<span class="nx">CustomError</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC229'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">message</span><span class="p">;</span>	</div><div class='line' id='LC230'>	<span class="p">};</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>	<span class="nx">raises</span><span class="p">(</span></div><div class='line' id='LC233'>		<span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC234'>			<span class="k">throw</span> <span class="s2">&quot;error&quot;</span></div><div class='line' id='LC235'>		<span class="p">}</span></div><div class='line' id='LC236'>	<span class="p">);</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>	<span class="nx">raises</span><span class="p">(</span></div><div class='line' id='LC239'>		<span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC240'>			<span class="k">throw</span> <span class="s2">&quot;error&quot;</span></div><div class='line' id='LC241'>		<span class="p">},</span></div><div class='line' id='LC242'>		<span class="s1">&#39;raises with just a message, no expected&#39;</span></div><div class='line' id='LC243'>	<span class="p">);</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'>	<span class="nx">raises</span><span class="p">(</span></div><div class='line' id='LC246'>		<span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC247'>			<span class="k">throw</span> <span class="k">new</span> <span class="nx">CustomError</span><span class="p">();</span></div><div class='line' id='LC248'>		<span class="p">},</span></div><div class='line' id='LC249'>		<span class="nx">CustomError</span><span class="p">,</span></div><div class='line' id='LC250'>		<span class="s1">&#39;raised error is an instance of CustomError&#39;</span></div><div class='line' id='LC251'>	<span class="p">);</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'>	<span class="nx">raises</span><span class="p">(</span></div><div class='line' id='LC254'>		<span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC255'>			<span class="k">throw</span> <span class="k">new</span> <span class="nx">CustomError</span><span class="p">(</span><span class="s2">&quot;some error description&quot;</span><span class="p">);</span></div><div class='line' id='LC256'>		<span class="p">},</span></div><div class='line' id='LC257'>		<span class="sr">/description/</span><span class="p">,</span></div><div class='line' id='LC258'>		<span class="s2">&quot;raised error message contains &#39;description&#39;&quot;</span></div><div class='line' id='LC259'>	<span class="p">);</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>	<span class="nx">raises</span><span class="p">(</span></div><div class='line' id='LC262'>		<span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC263'>			<span class="k">throw</span> <span class="k">new</span> <span class="nx">CustomError</span><span class="p">(</span><span class="s2">&quot;some error description&quot;</span><span class="p">);</span></div><div class='line' id='LC264'>		<span class="p">},</span></div><div class='line' id='LC265'>		<span class="kd">function</span><span class="p">(</span> <span class="nx">err</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC266'>			<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">err</span> <span class="k">instanceof</span> <span class="nx">CustomError</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="sr">/description/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC267'>				<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC268'>			<span class="p">}</span></div><div class='line' id='LC269'>		<span class="p">},</span></div><div class='line' id='LC270'>		<span class="s2">&quot;custom validation function&quot;</span>		</div><div class='line' id='LC271'>	<span class="p">);</span>	</div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'><span class="p">});</span></div><div class='line' id='LC274'><br/></div><div class='line' id='LC275'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">document</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC276'><br/></div><div class='line' id='LC277'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;fixture&quot;</span><span class="p">);</span></div><div class='line' id='LC278'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;setup&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC279'>	<span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;qunit-fixture&quot;</span><span class="p">).</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s2">&quot;foobar&quot;</span><span class="p">;</span></div><div class='line' id='LC280'><span class="p">});</span></div><div class='line' id='LC281'><span class="nx">test</span><span class="p">(</span><span class="s2">&quot;basics&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC282'>	<span class="nx">equal</span><span class="p">(</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;qunit-fixture&quot;</span><span class="p">).</span><span class="nx">innerHTML</span><span class="p">,</span> <span class="s2">&quot;test markup&quot;</span><span class="p">,</span> <span class="s2">&quot;automatically reset&quot;</span> <span class="p">);</span></div><div class='line' id='LC283'><span class="p">});</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'><span class="p">}</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'><span class="nx">module</span><span class="p">(</span><span class="s2">&quot;custom assertions&quot;</span><span class="p">);</span></div><div class='line' id='LC288'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC289'>	<span class="kd">function</span> <span class="nx">mod2</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">expected</span><span class="p">,</span> <span class="nx">message</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC290'>		<span class="kd">var</span> <span class="nx">actual</span> <span class="o">=</span> <span class="nx">value</span> <span class="o">%</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC291'>		<span class="nx">QUnit</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">actual</span> <span class="o">==</span> <span class="nx">expected</span><span class="p">,</span> <span class="nx">actual</span><span class="p">,</span> <span class="nx">expected</span><span class="p">,</span> <span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC292'>	<span class="p">}</span></div><div class='line' id='LC293'>	<span class="nx">test</span><span class="p">(</span><span class="s2">&quot;mod2&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC294'>		<span class="nx">mod2</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="s2">&quot;2 % 2 == 0&quot;</span><span class="p">);</span></div><div class='line' id='LC295'>		<span class="nx">mod2</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="s2">&quot;3 % 2 == 1&quot;</span><span class="p">);</span></div><div class='line' id='LC296'>	<span class="p">})</span></div><div class='line' id='LC297'><span class="p">})();</span></div><div class='line' id='LC298'><br/></div><div class='line' id='LC299'><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC300'>	<span class="kd">var</span> <span class="nx">reset</span> <span class="o">=</span> <span class="nx">QUnit</span><span class="p">.</span><span class="nx">reset</span><span class="p">;</span></div><div class='line' id='LC301'>	<span class="kd">function</span> <span class="nx">afterTest</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC302'>		<span class="nx">ok</span><span class="p">(</span> <span class="kc">false</span><span class="p">,</span> <span class="s2">&quot;reset should not modify test status&quot;</span> <span class="p">);</span></div><div class='line' id='LC303'>	<span class="p">}</span></div><div class='line' id='LC304'>	<span class="nx">module</span><span class="p">(</span><span class="s2">&quot;reset&quot;</span><span class="p">);</span></div><div class='line' id='LC305'>	<span class="nx">test</span><span class="p">(</span><span class="s2">&quot;reset runs assertions&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC306'>		<span class="nx">QUnit</span><span class="p">.</span><span class="nx">reset</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC307'>			<span class="nx">afterTest</span><span class="p">();</span></div><div class='line' id='LC308'>			<span class="nx">reset</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC309'>		<span class="p">};</span></div><div class='line' id='LC310'>	<span class="p">});</span></div><div class='line' id='LC311'>	<span class="nx">test</span><span class="p">(</span><span class="s2">&quot;reset runs assertions2&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC312'>		<span class="nx">QUnit</span><span class="p">.</span><span class="nx">reset</span> <span class="o">=</span> <span class="nx">reset</span><span class="p">;</span></div><div class='line' id='LC313'>	<span class="p">});</span></div><div class='line' id='LC314'><span class="p">})();</span></div><div class='line' id='LC315'><br/></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


          </div>
        </div>
      </div>
    </div>
  

  </div>


<div class="frame frame-loading" style="display:none;">
  <img src="/images/modules/ajax/big_spinner_336699.gif">
</div>
    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        <div class="sponsor">
          <a href="http://www.rackspace.com" class="logo">
            <img alt="Dedicated Server" src="https://assets3.github.com/images/modules/footer/rackspace_logo.png?v2?91a07a3bcdffed6312a4290ed0eb7fb893c5b803" />
          </a>
          Powered by the <a href="http://www.rackspace.com ">Dedicated
          Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
          Computing</a> of Rackspace Hosting<span>&reg;</span>
        </div>

        <ul class="links">
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
          <li><a href="http://support.github.com">Support</a></li>
          <li><a href="https://github.com/training">Training</a></li>
          <li><a href="http://jobs.github.com">Job Board</a></li>
          <li><a href="http://shop.github.com">Shop</a></li>
          <li><a href="https://github.com/contact">Contact</a></li>
          <li><a href="http://develop.github.com">API</a></li>
          <li><a href="http://status.github.com">Status</a></li>
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.08289s from fe3.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    
      
      
        <!-- current locale:  -->
        <div class="locales">
          <div class="site">

            <ul class="choices clearfix limited-locales">
              <li><span class="current">English</span></li>
              
                  <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
              
                  <li><a rel="nofollow" href="?locale=fr">Français</a></li>
              
                  <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
              
                  <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
              
                  <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
              
                  <li><a rel="nofollow" href="?locale=zh">中文</a></li>
              
              <li class="all"><a href="#" class="minibutton btn-forward js-all-locales"><span><span class="icon"></span>See all available languages</span></a></li>
            </ul>

            <div class="all-locales clearfix">
              <h3>Your current locale selection: <strong>English</strong>. Choose another?</h3>
              
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=en">English</a></li>
                  
                      <li><a rel="nofollow" href="?locale=af">Afrikaans</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ca">Català</a></li>
                  
                      <li><a rel="nofollow" href="?locale=cs">Čeština</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
                  
                      <li><a rel="nofollow" href="?locale=es">Español</a></li>
                  
                      <li><a rel="nofollow" href="?locale=fr">Français</a></li>
                  
                      <li><a rel="nofollow" href="?locale=hr">Hrvatski</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=id">Indonesia</a></li>
                  
                      <li><a rel="nofollow" href="?locale=it">Italiano</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
                  
                      <li><a rel="nofollow" href="?locale=nl">Nederlands</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=no">Norsk</a></li>
                  
                      <li><a rel="nofollow" href="?locale=pl">Polski</a></li>
                  
                      <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=sr">Српски</a></li>
                  
                      <li><a rel="nofollow" href="?locale=sv">Svenska</a></li>
                  
                      <li><a rel="nofollow" href="?locale=zh">中文</a></li>
                  
                </ul>
              
            </div>

          </div>
          <div class="fade"></div>
        </div>
      
    

    <script>window._auth_token = "d9399b914679fdb5b7a2c71b319bc66d5828eb03"</script>
    <div id="keyboard_shortcuts_pane" style="display:none">
  <h2>Keyboard Shortcuts</h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->
    <div class="column middle">
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
    </div><!-- /.column.first -->
    <div class="column last">
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->
  </div><!-- /.columns.equacols -->

  <div class="rule"></div>

  <h3>Issues</h3>

  <div class="columns threecols">
    <div class="column first">
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>x</dt>
        <dd>Toggle select target</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.column.first -->
    <div class="column middle">
      <dl class="keyboard-mappings">
        <dt>I</dt>
        <dd>Mark selected as read</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>U</dt>
        <dd>Mark selected as unread</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>e</dt>
        <dd>Close selected</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Remove selected from view</dd>
      </dl>
    </div><!-- /.column.middle -->
    <div class="column last">
      <dl class="keyboard-mappings">
        <dt>c</dt>
        <dd>Create issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>l</dt>
        <dd>Create label</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>i</dt>
        <dd>Back to inbox</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>u</dt>
        <dd>Back to issues</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>/</dt>
        <dd>Focus issues search</dd>
      </dl>
    </div>
  </div>

  <div class="rule"></div>

  <h3>Network Graph</h3>
  <div class="columns equacols">
    <div class="column first">
      <dl class="keyboard-mappings">
        <dt>← <em>or</em> h</dt>
        <dd>Scroll left</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>→ <em>or</em> l</dt>
        <dd>Scroll right</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>↑ <em>or</em> k</dt>
        <dd>Scroll up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>↓ <em>or</em> j</dt>
        <dd>Scroll down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Toggle visibility of head labels</dd>
      </dl>
    </div><!-- /.column.first -->
    <div class="column last">
      <dl class="keyboard-mappings">
        <dt>shift ← <em>or</em> shift h</dt>
        <dd>Scroll all the way left</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>shift → <em>or</em> shift l</dt>
        <dd>Scroll all the way right</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>shift ↑ <em>or</em> shift k</dt>
        <dd>Scroll all the way up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>shift ↓ <em>or</em> shift j</dt>
        <dd>Scroll all the way down</dd>
      </dl>
    </div><!-- /.column.last -->
  </div>

</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    <script type='text/javascript'></script>
    
  </body>
</html>

