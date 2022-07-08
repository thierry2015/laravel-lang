import{_ as l,r as o,o as r,c,a as e,b as n,w as d,e as t,d as a}from"./app.aacfc9ff.js";const h={},u=e("h1",{id:"contributing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),t(" Contributing")],-1),p=e("p",null,[t("Contributions are "),e("strong",null,"welcome"),t(" and will be fully "),e("strong",null,"credited"),t(".")],-1),_=t("We accept contributions via Pull Requests on "),g={href:"https://github.com/Laravel-Lang/lang",target:"_blank",rel:"noopener noreferrer"},f=t("Github"),m=t("."),b=e("h2",{id:"how-can-i-add-a-language-in-this-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-can-i-add-a-language-in-this-project","aria-hidden":"true"},"#"),t(" How can I add a language in this project ?")],-1),v=e("li",null,"Fork this repository;",-1),k=t("Make sure you have "),w={href:"https://www.php.net",target:"_blank",rel:"noopener noreferrer"},x=t("PHP 8.1"),q=t(" or higher installed on your computer;"),j=e("li",null,[t("Install dependencies by running console command:"),e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"composer"),t(` update
`)])])])],-1),y=t("Call the console command, passing in the argument the name of the localization to be added. Localization code must comply with "),I={href:"https://laravel.com/docs/8.x/localization",target:"_blank",rel:"noopener noreferrer"},L=t("ISO-15897"),T=t(" and "),F={href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",target:"_blank",rel:"noopener noreferrer"},C=t("ISO-639-1"),N=t(" (ex: "),E=e("code",null,"fr",-1),M=t(" for French):"),S=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`vendor/bin/lang create fr
`)])],-1),z=a("<li>This command will create all the necessary files and fill them with initial data. The files will be located in the <code>locales/{locale}</code> directory;</li><li>Keep in mind that the <code>*-inline.json</code> files does not come with Laravel and the idea of this file is not to put a specific name to each attribute (as in <code>validation.php</code>) but a generic name for the validation attributes. Therefore in the translations of this file the placeholder <code>:attribute</code> <strong>should not</strong> appear.</li><li>Add a pull request with the name of the language <blockquote><p>ex: [fr] New language</p></blockquote></li>",3),O=a(`<h2 id="how-can-i-fix-a-file" tabindex="-1"><a class="header-anchor" href="#how-can-i-fix-a-file" aria-hidden="true">#</a> How can I fix a file ?</h2><ul><li>Fork this repository;</li><li>Update the files; <blockquote><p>Note that in inline files (<code>json-inline.json</code> and <code>php-inline.json</code>), keys are the &quot;non-inline&quot; option.</p><p>For example:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;The :attribute must be at least :length characters.&quot;</span><span class="token operator">:</span> <span class="token string">&quot;This field must be at least :length characters.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li><li>Add a pull request with the name of the language <blockquote><p>ex: [fr] Update validation for number in validation</p></blockquote></li></ul><h2 id="what-should-i-do-if-there-is-a-tag-whose-translation-is-the-same-as-in-english" tabindex="-1"><a class="header-anchor" href="#what-should-i-do-if-there-is-a-tag-whose-translation-is-the-same-as-in-english" aria-hidden="true">#</a> What should I do if there is a tag whose translation is the same as in English?</h2>`,3),V=t("In some languages there are some strings whose translation is the same as in English. In this case, the script that generates the "),A=t("status"),B=t(" adds them by default to the list of pending translations. This affects the "),H=e("em",null,"completion status",-1),P=t(" for this language which would never be marked in "),R=e("em",null,"status list",-1),W=t(" with ( \u2714) but with (\u2757) even if all other strings were translated."),U=a(`<p>We can avoid this situation in the following way:</p><ul><li><p>Fork this repository if you haven&#39;t already;</p></li><li><p>Create a <code>_excludes.json</code> file in the localization folder if it doesn&#39;t already exist;</p></li><li><p>This file contains an array of values for each exception.</p><blockquote><p>For example, we need to exclude Micronesia from the status check for Italian:</p><p><em>locales/it/json.json</em>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Micronesia, Federated States Of&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Micronesia&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_locales/it/<em>excludes.json</em>:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token string">&quot;Micronesia&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li><li><p>Add these changes to the pull request you will send.</p></li></ul>`,2);function G(K,D){const s=o("ExternalLinkIcon"),i=o("RouterLink");return r(),c("div",null,[u,p,e("p",null,[_,e("a",g,[f,n(s)]),m]),b,e("ul",null,[v,e("li",null,[k,e("a",w,[x,n(s)]),q]),j,e("li",null,[y,e("a",I,[L,n(s)]),T,e("a",F,[C,n(s)]),N,E,M,S]),z]),O,e("p",null,[V,n(i,{to:"/status.html"},{default:d(()=>[A]),_:1}),B,H,P,R,W]),U])}var Q=l(h,[["render",G],["__file","contributing.html.vue"]]);export{Q as default};
