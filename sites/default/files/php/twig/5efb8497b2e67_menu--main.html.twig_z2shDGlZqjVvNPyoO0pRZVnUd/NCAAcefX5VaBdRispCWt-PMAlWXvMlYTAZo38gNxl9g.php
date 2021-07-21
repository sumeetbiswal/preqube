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

/* themes/preqube/templates/menu--main.html.twig */
class __TwigTemplate_2fa0da3b9d66d3e4f4be2fc19f1ae9cf53106dcf8a07735a90b70abd23d5cf8c extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["import" => 22, "macro" => 30, "if" => 32, "for" => 38, "set" => 40];
        $filters = ["escape" => 34];
        $functions = ["link" => 51];

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'if', 'for', 'set'],
                ['escape'],
                ['link']
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
        // line 18
        echo "

<div class=\"navbar-collapse collapse\">

";
        // line 22
        $context["menus"] = $this;
        // line 23
        echo "
";
        // line 28
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($context["menus"]->getmenu_links(($context["items"] ?? null), ($context["attributes"] ?? null), 0));
        echo "

";
        // line 61
        echo "
\t<!-- End Navigation List -->
</div>";
    }

    // line 30
    public function getmenu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start(function () { return ''; });
        try {
            // line 31
            echo "  ";
            $context["menus"] = $this;
            // line 32
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 33
                echo "    ";
                if ((($context["menu_level"] ?? null) == 0)) {
                    // line 34
                    echo "      <ul";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => "nav", 1 => "navbar-nav", 2 => "navbar-right"], "method")), "html", null, true);
                    echo ">
    ";
                } else {
                    // line 36
                    echo "      <ul";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => "dropdown"], "method")), "html", null, true);
                    echo ">
    ";
                }
                // line 38
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 39
                    echo "      ";
                    // line 40
                    $context["item_classes"] = [0 => (($this->getAttribute(                    // line 41
$context["item"], "is_expanded", [])) ? ("expanded") : ("")), 1 => ((($this->getAttribute(                    // line 42
$context["item"], "is_expanded", []) && (($context["menu_level"] ?? null) == 0))) ? ("drop") : ("")), 2 => (($this->getAttribute(                    // line 43
$context["item"], "in_active_trail", [])) ? ("") : (""))];
                    // line 46
                    echo "      ";
                    if (((($context["menu_level"] ?? null) == 0) && $this->getAttribute($context["item"], "is_expanded", []))) {
                        // line 47
                        echo "        <li";
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["item"], "attributes", []), "addClass", [0 => ($context["item_classes"] ?? null)], "method")), "html", null, true);
                        echo ">
        <a href=\"";
                        // line 48
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "url", [])), "html", null, true);
                        echo "\">";
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "title", [])), "html", null, true);
                        echo " </a>
      ";
                    } else {
                        // line 50
                        echo "        <li";
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($context["item"], "attributes", []), "addClass", [0 => ($context["item_classes"] ?? null)], "method")), "html", null, true);
                        echo ">
        ";
                        // line 51
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->getLink($this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "title", [])), $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "url", []))), "html", null, true);
                        echo "
      ";
                    }
                    // line 53
                    echo "      ";
                    if ($this->getAttribute($context["item"], "below", [])) {
                        // line 54
                        echo "        ";
                        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($context["menus"]->getmenu_links($this->getAttribute($context["item"], "below", []), $this->getAttribute(($context["attributes"] ?? null), "removeClass", [0 => "nav", 1 => "navbar-nav", 2 => "navbar-right"], "method"), (($context["menu_level"] ?? null) + 1)));
                        echo "
      ";
                    }
                    // line 56
                    echo "      </li>
    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 58
                echo "    </ul>
  ";
            }
        } catch (\Exception $e) {
            ob_end_clean();

            throw $e;
        } catch (\Throwable $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "themes/preqube/templates/menu--main.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  165 => 58,  158 => 56,  152 => 54,  149 => 53,  144 => 51,  139 => 50,  132 => 48,  127 => 47,  124 => 46,  122 => 43,  121 => 42,  120 => 41,  119 => 40,  117 => 39,  112 => 38,  106 => 36,  100 => 34,  97 => 33,  94 => 32,  91 => 31,  77 => 30,  71 => 61,  66 => 28,  63 => 23,  61 => 22,  55 => 18,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/preqube/templates/menu--main.html.twig", "/home/prequdzs/public_html/themes/preqube/templates/menu--main.html.twig");
    }
}
