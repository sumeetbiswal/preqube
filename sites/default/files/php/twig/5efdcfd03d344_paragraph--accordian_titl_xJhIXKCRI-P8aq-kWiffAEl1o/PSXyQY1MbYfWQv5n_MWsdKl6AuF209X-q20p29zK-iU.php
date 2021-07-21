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

/* themes/preqube/templates/paragraph--accordian_title_article.html.twig */
class __TwigTemplate_4b2cd28877ee158039bc3ae94a3d519679fd5bfeb100451f7c509ee128132b2b extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'paragraph' => [$this, 'block_paragraph'],
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 42, "block" => 48];
        $filters = ["clean_class" => 44, "escape" => 52, "trim" => 52, "striptags" => 52, "render" => 52];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'block'],
                ['clean_class', 'escape', 'trim', 'striptags', 'render'],
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
        // line 42
        $context["classes"] = [0 => "paragraph", 1 => ("paragraph--type--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 44
($context["paragraph"] ?? null), "bundle", [])))), 2 => ((        // line 45
($context["view_mode"] ?? null)) ? (("paragraph--view-mode--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 48
        $this->displayBlock('paragraph', $context, $blocks);
        // line 68
        echo "
";
    }

    // line 48
    public function block_paragraph($context, array $blocks = [])
    {
        // line 49
        echo "
    ";
        // line 50
        $this->displayBlock('content', $context, $blocks);
        // line 66
        echo "  
";
    }

    // line 50
    public function block_content($context, array $blocks = [])
    {
        // line 51
        echo "
\t\t\t\t<div class=\"col-md-";
        // line 52
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_col_width", []))))), "html", null, true);
        echo "\">
\t\t\t\t\t\t\t\t\t\t
\t\t\t\t\t<!-- Classic Heading -->
\t\t\t\t\t<h4 class=\"classic-title\"><span>";
        // line 55
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_headings", []))))), "html", null, true);
        echo "</span></h4>
\t\t\t\t  
\t\t\t\t\t<!-- Accordion -->
\t\t\t\t\t<div class=\"panel-group\" id=\"accordion\">
\t\t\t\t\t  
\t\t\t\t\t\t";
        // line 60
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_accordian_item", [])), "html", null, true);
        echo "
\t\t\t\t\t  
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t
    ";
    }

    public function getTemplateName()
    {
        return "themes/preqube/templates/paragraph--accordian_title_article.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  101 => 60,  93 => 55,  87 => 52,  84 => 51,  81 => 50,  76 => 66,  74 => 50,  71 => 49,  68 => 48,  63 => 68,  61 => 48,  59 => 45,  58 => 44,  57 => 42,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/preqube/templates/paragraph--accordian_title_article.html.twig", "/home/prequdzs/public_html/themes/preqube/templates/paragraph--accordian_title_article.html.twig");
    }
}
