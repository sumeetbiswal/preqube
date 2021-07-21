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

/* themes/preqube/templates/paragraph--accordian-item.html.twig */
class __TwigTemplate_d128657763259629c6db378670b62329128614eb3640756cf465f85ff81f8803 extends \Twig\Template
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
        $tags = ["block" => 1];
        $filters = ["escape" => 9, "trim" => 11, "striptags" => 11, "render" => 11];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['block'],
                ['escape', 'trim', 'striptags', 'render'],
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
        $this->displayBlock('paragraph', $context, $blocks);
    }

    public function block_paragraph($context, array $blocks = [])
    {
        // line 2
        echo "
    ";
        // line 3
        $this->displayBlock('content', $context, $blocks);
        // line 23
        echo "  
";
    }

    // line 3
    public function block_content($context, array $blocks = [])
    {
        // line 4
        echo "
\t\t\t<div class=\"panel panel-default\">
\t\t\t\t
\t\t\t\t<div class=\"panel-heading\">
\t\t\t\t\t<h4 class=\"panel-title\">
\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse-";
        // line 9
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["paragraph"] ?? null), "id", [], "method")), "html", null, true);
        echo "\" class=\"collapsed\">
\t\t\t\t\t\t\t<i class=\"icon-down-open-1 control-icon\"></i>
\t\t\t\t\t\t\t<i class=\"";
        // line 11
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_title_icon", []))))), "html", null, true);
        echo "\"></i> ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_trim_filter(strip_tags($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_title", []))))), "html", null, true);
        echo "
\t\t\t\t\t\t</a>
\t\t\t\t\t</h4>
\t\t\t\t</div>
\t\t\t\t
\t\t\t\t<div id=\"collapse-";
        // line 16
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["paragraph"] ?? null), "id", [], "method")), "html", null, true);
        echo "\" class=\"panel-collapse collapse\">
\t\t\t\t\t<div class=\"panel-body\">";
        // line 17
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_description", [])), "html", null, true);
        echo "</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t
\t\t\t 
    ";
    }

    public function getTemplateName()
    {
        return "themes/preqube/templates/paragraph--accordian-item.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  102 => 17,  98 => 16,  88 => 11,  83 => 9,  76 => 4,  73 => 3,  68 => 23,  66 => 3,  63 => 2,  57 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/preqube/templates/paragraph--accordian-item.html.twig", "/home/prequdzs/public_html/themes/preqube/templates/paragraph--accordian-item.html.twig");
    }
}
