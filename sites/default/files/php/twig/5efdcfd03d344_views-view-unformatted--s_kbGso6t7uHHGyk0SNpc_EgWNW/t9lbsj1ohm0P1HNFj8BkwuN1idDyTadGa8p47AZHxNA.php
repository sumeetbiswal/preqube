<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/preqube/templates/views-view-unformatted--slideshow--block_1.html.twig */
class __TwigTemplate_d16f6a8cedccd840e6d4eef4ef8a1640941c1cbca86c2a7d4c66fa1bf45249de extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["for" => 11, "set" => 17, "if" => 19];
        $filters = ["escape" => 20];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['for', 'set', 'if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "
<!-- Start Home Slider -->
\t\t<div id=\"slider\">
        
            <!-- START REVOLUTION SLIDER 3.1 rev5 fullwidth mode -->
            <div class=\"fullwidthbanner-container\">
                <div class=\"fullwidthbanner\" >
                    <ul>
                    
\t\t\t\t\t\t
\t\t\t\t\t\t\t";
        // line 11
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
            // line 12
            echo "\t\t\t\t\t\t\t   <li data-transition=\"fade\" data-slotamount=\"7\" data-masterspeed=\"300\" >
\t\t\t\t\t\t\t   <!-- MAIN IMAGE -->
\t\t\t\t\t\t\t   
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t  ";
            // line 17
            $context["btype"] = $this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_banner_type }}", [], "array");
            // line 18
            echo "\t\t\t\t\t\t\t  
\t\t\t\t\t\t\t   ";
            // line 19
            if ((($context["btype"] ?? null) == "Type-1")) {
                // line 20
                echo "\t\t\t\t\t\t\t\t  <img src=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
                echo "/images/banner-bg.jpg\" data-fullwidthcentering=\"on\" alt=\"slidebg1\"  data-bgfit=\"cover\" data-bgposition=\"center center\" data-bgrepeat=\"no-repeat\">
\t\t\t\t\t\t\t\t    <!-- LAYER NR. 1 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption uppercase big_font_size boldest_font_weight dark_font_color sft start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"540\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"125\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1600\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutExpo\"><span class=\"accent-color\">";
                // line 28
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_heading }}", [], "array")), "html", null, true);
                echo "</span><br>";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_sub_heading }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 2 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption medium_font_size regular_font_weight dark_font_color sfl start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"540\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"208\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1900\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutExpo\">";
                // line 38
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_text1 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 3 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption mini_font_size light_font_weight gray_font_color sfr start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"540\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"250\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"2200\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutExpo\">";
                // line 48
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_text2 }}", [], "array")), "html", null, true);
                echo "<br/>";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_text3 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 4 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption sfb start\"
\t\t\t\t\t\t\t\t\t\t data-x=\"540\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"314\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"2500\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutExpo\"><a href=\"";
                // line 58
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_button1_link }}", [], "array")), "html", null, true);
                echo "\" class=\"btn-system btn-medium\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_button1 }}", [], "array")), "html", null, true);
                echo "</a>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 5 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption sfl start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"80\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"bottom\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"1000\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1000\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"Power1.easeOut\">";
                // line 68
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_image1 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t 
\t\t\t\t\t\t\t\t ";
            } elseif ((            // line 71
($context["btype"] ?? null) == "Type-2")) {
                // line 72
                echo "\t\t\t\t\t\t\t\t<img src=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
                echo "/images/banner-bg-6.jpg\" data-fullwidthcentering=\"on\" alt=\"slidebg1\"  data-bgfit=\"cover\" data-bgposition=\"center center\" data-bgrepeat=\"no-repeat\">
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 1 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfl start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"left\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"110\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1600\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeInOutExpo\">";
                // line 80
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_heading }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 2 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfr start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"left\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"150\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1900\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeInOutExpo\">";
                // line 90
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_sub_heading }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 3 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfl start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"left\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"190\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"2200\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeInOutExpo\">";
                // line 100
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_text1 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 4 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption  mini_font_size bold_font_weight dark_font_color gray_bg sfr start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"left\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"230\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"2500\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeInOutExpo\">";
                // line 110
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_text2 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 5 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfl start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"left\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"270\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"2800\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeInOutExpo\">";
                // line 120
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_text3 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 6 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfr start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"left\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"310\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"3100\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeInOutExpo\">";
                // line 130
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_text4 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 7 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption sfr start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"220\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"60\"
\t\t\t\t\t\t\t\t\t\tdata-hoffset=\"100\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"5600\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1000\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutBack\"
\t\t\t\t\t\t\t\t\t\tstyle=\"z-index: 2\">";
                // line 142
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_image1 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 8 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption sfl start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"right\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"70\"
\t\t\t\t\t\t\t\t\t\tdata-hoffset=\"-100\"

\t\t\t\t\t\t\t\t\t\tdata-speed=\"600\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1300\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutBack\"
\t\t\t\t\t\t\t\t\t\tstyle=\"z-index: 1\">";
                // line 154
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_image2 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t";
            } elseif ((            // line 157
($context["btype"] ?? null) == "Type-3")) {
                // line 158
                echo "\t\t\t\t\t\t\t\t<img src=\"";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
                echo "/images/banner-bg-3.jpg\" data-fullwidthcentering=\"on\" alt=\"slidebg1\"  data-bgfit=\"cover\" data-bgposition=\"center center\" data-bgrepeat=\"no-repeat\">
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 1 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption uppercase big_font_size boldest_font_weight dark_font_color sft start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"center\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"140\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1000\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutExpo\">";
                // line 166
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_heading }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 2 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption medium_font_size regular_font_weight dark_font_color sfb start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"center\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"182\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1300\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutExpo\">";
                // line 176
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_sub_heading }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 3 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption small_font_size light_font_weight gray_font_color text-center sfb start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"center\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"220\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"300\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1600\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutExpo\">";
                // line 186
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_text1 }}", [], "array")), "html", null, true);
                echo "<br/>";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_text2 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 4 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption sfr start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"center\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"292\"
\t\t\t\t\t\t\t\t\t\tdata-hoffset=\"84\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"600\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"2000\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutExpo\"><a href=\"";
                // line 197
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_button1_link }}", [], "array")), "html", null, true);
                echo "\" class=\"btn-system btn-medium\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_button1 }}", [], "array")), "html", null, true);
                echo "</a> 
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 5 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption sfl start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"center\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"292\"
\t\t\t\t\t\t\t\t\t\tdata-hoffset=\"-84\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"600\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"2000\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutExpo\"><a href=\"";
                // line 208
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_button2_link }}", [], "array")), "html", null, true);
                echo "\" class=\"btn-system btn-medium btn-gray\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_button2 }}", [], "array")), "html", null, true);
                echo "</a>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 6 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption sfl start\"
\t\t\t\t\t\t\t\t\t\t data-x=\"right\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"70\"
\t\t\t\t\t\t\t\t\t\tdata-hoffset=\"-100\"

\t\t\t\t\t\t\t\t\t\tdata-speed=\"2600\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"1300\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"easeOutBack\"
\t\t\t\t\t\t\t\t\t\tdata-customin=\"x:300;y:-40;z:-400;rotationX:0;rotationY:0;rotationZ:-20;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;\">
\t\t\t\t\t\t\t\t\t\t";
                // line 221
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_image1 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t<!-- LAYER NR. 7 -->
\t\t\t\t\t\t\t\t\t<div class=\"tp-caption customin start\"
\t\t\t\t\t\t\t\t\t\tdata-x=\"-50\"
\t\t\t\t\t\t\t\t\t\tdata-y=\"80\"
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t\t\tdata-speed=\"1400\"
\t\t\t\t\t\t\t\t\t\tdata-start=\"2600\"
\t\t\t\t\t\t\t\t\t\tdata-easing=\"Power1.easeOut\"
\t\t\t\t\t\t\t\t\t\tdata-customin=\"x:-200;y:20;z:-500;rotationX:0;rotationY:0;rotationZ:10;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;\">
\t\t\t\t\t\t\t\t\t\t";
                // line 233
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["row"], "content", []), "#view", [], "array"), "style_plugin", []), "render_tokens", []), $this->getAttribute($context["loop"], "index0", []), [], "array"), "{{ field_image2 }}", [], "array")), "html", null, true);
                echo "
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t
\t\t\t\t\t\t\t\t";
            }
            // line 237
            echo "\t\t\t\t\t\t\t    </li>

\t\t\t\t\t\t\t";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 240
        echo "\t\t\t\t\t
\t\t\t\t\t\t
\t\t\t\t\t
\t\t\t\t\t
                    </ul>
                    <div class=\"tp-bannertimer\" style=\"visibility:hidden;\"></div>
                </div>
            </div>
            
            <!-- THE SCRIPT INITIALISATION -->
            <!-- LOOK THE DOCUMENTATION FOR MORE INFORMATIONS -->
            <script type=\"text/javascript\">
                var revapi;
                jQuery(document).ready(function() {
\t\t\t\t\trevapi = jQuery('.fullwidthbanner').revolution({
\t\t\t\t\t\t
\t\t\t\t\t\tdelay:9000,
\t\t\t\t\t\tstartwidth:1140,
\t\t\t\t\t\tstartheight:450,
\t\t\t\t\t\thideThumbs:200,
\t\t\t\t\t\t
\t\t\t\t\t\tthumbWidth:100,
\t\t\t\t\t\tthumbHeight:50,
\t\t\t\t\t\tthumbAmount:3,
\t\t\t\t\t\t
\t\t\t\t\t\tnavigationType:\"none\",
\t\t\t\t\t\tnavigationArrows:\"solo\",
\t\t\t\t\t\tnavigationStyle:\"round\",
\t\t\t\t\t\t
\t\t\t\t\t\ttouchenabled:\"on\",
\t\t\t\t\t\tonHoverStop:\"on\",
\t\t\t\t\t\t
\t\t\t\t\t\tnavigationHAlign:\"center\",
\t\t\t\t\t\tnavigationVAlign:\"bottom\",
\t\t\t\t\t\tnavigationHOffset:0,
\t\t\t\t\t\tnavigationVOffset:20,

\t\t\t\t\t\tsoloArrowLeftHalign:\"left\",
\t\t\t\t\t\tsoloArrowLeftValign:\"center\",
\t\t\t\t\t\tsoloArrowLeftHOffset:20,
\t\t\t\t\t\tsoloArrowLeftVOffset:0,

\t\t\t\t\t\tsoloArrowRightHalign:\"right\",
\t\t\t\t\t\tsoloArrowRightValign:\"center\",
\t\t\t\t\t\tsoloArrowRightHOffset:20,
\t\t\t\t\t\tsoloArrowRightVOffset:0,
\t\t\t\t\t\t\t\t
\t\t\t\t\t\tshadow:0,
\t\t\t\t\t\tfullWidth:\"on\",
\t\t\t\t\t\tfullScreen:\"off\",
\t\t\t\t\t\tlazyLoad:\"on\",

\t\t\t\t\t\tstopLoop:\"off\",
\t\t\t\t\t\tstopAfterLoops:-1,
\t\t\t\t\t\tstopAtSlide:-1,

\t\t\t\t\t\tshuffle:\"off\",
\t\t\t\t\t\t
\t\t\t\t\t\thideSliderAtLimit:0,
\t\t\t\t\t\thideCaptionAtLimit:0,
\t\t\t\t\t\thideAllCaptionAtLilmit:0,
\t\t\t\t\t\tstartWithSlide:0,\t
                \t});
                });
            </script>
                 
        </div>
        <!-- End Home Slider -->
      ";
    }

    public function getTemplateName()
    {
        return "themes/preqube/templates/views-view-unformatted--slideshow--block_1.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  417 => 240,  401 => 237,  394 => 233,  379 => 221,  361 => 208,  345 => 197,  329 => 186,  316 => 176,  303 => 166,  291 => 158,  289 => 157,  283 => 154,  268 => 142,  253 => 130,  240 => 120,  227 => 110,  214 => 100,  201 => 90,  188 => 80,  176 => 72,  174 => 71,  168 => 68,  153 => 58,  138 => 48,  125 => 38,  110 => 28,  98 => 20,  96 => 19,  93 => 18,  91 => 17,  84 => 12,  67 => 11,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/preqube/templates/views-view-unformatted--slideshow--block_1.html.twig", "/home/prequdzs/public_html/themes/preqube/templates/views-view-unformatted--slideshow--block_1.html.twig");
    }
}
